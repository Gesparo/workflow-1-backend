<?php

class User {

	protected $name;		// ник

    private $login = false;		// логинированость (TRUE | FALSE)

    private $salt = 'salt';

    public function __construct()
    {
        if ( !empty($_SESSION['name']) && !empty($_SESSION['pass']) ) {

            $this->setUserData( ['name' => 'admin'] );
            $this->login = true;
        }
        else if(
            !empty( $_COOKIE['UserToken'] ) &&
            (($this->name . $_SERVER['HTTP_USER_AGENT'] . md5( $this->salt )) ==  $_COOKIE['UserToken'] )
        )
        {
            $this->login = true;
        }
        else
        {
            $this->login = false;
        }
    }
	
	private function setUserData( $data )
    {
		$this->name	= $data['name'];
	}

    // login user
	public function login($email, $pass)
    {
        if( empty($email) || $email != 'admin' || empty($pass) || $pass != 'admin' )
        {
            $this->login = false;

            return false;
        }

        $this->setUserData( ['name' => 'admin'] );

        $_SESSION['name'] = $this->name;
        $_SESSION['pass']  = sha1(md5( $this->salt ) . md5( $pass ) );

        $this->setUserToken( $this->salt );
				
        $this->login = true;

        return true;
	}
	
	private function setUserToken($salt )
    {
		$token = sha1( $this->name . $_SERVER['HTTP_USER_AGENT'] . md5( $salt ) ) ;
		SetCookie("UserToken", $token, time() + 604800, '/');
	}

	private function deleteUserToken( )
    {
		SetCookie("UserToken", '', time(), '/');
	}
	
	public function logout()
    {
		unset($_SESSION['name']);
		unset($_SESSION['pass']);
		$this->deleteUserToken();
	}
	
	public function get_name()
    {
		return $this->name;
	}

	public function get_access()
    {
		return $this->login;
	}
}
