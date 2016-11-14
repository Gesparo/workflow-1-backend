<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <title>Админ-панель</title>
    <meta content="Melnik Maksim" name="author"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <meta content="Site-portfolio" name="description"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <meta content="site, portfolio" name="keywords"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <meta content="width=device-width, initial-scale=1" name="viewport"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <meta content="ie=edge" http-equiv="x-ua-compatible"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <link rel="shortcut icon" type="image/ico" href="favicon.ico?v=2"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <link rel="stylesheet" href="assets/css/foundation.css"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <link rel="stylesheet" href="assets/css/app.css?v=1"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
        <script src="assets/js/foundation.js" defer<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></script>        <script src="assets/js/app.js?v=1" defer<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></script>    <!--[if lt IE 9]>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></script>    <![endif]-->
  </head>
  <body<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-panel',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-header',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
      <h1<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-header__title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Панель администрирования</h1>
      <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-header__link-block',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><a href="/"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-header__link',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Вернуться на сайт </a></div>
    </div>
    <ul<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-tabs',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
      <?php foreach (array('Tab 1', 'Tab 2', 'Tab 3', 'Tab 4') as $val) { ?> 
        <?php if($val == 'Tab 1') { ?> 
          <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-tabs__tab',
  1 => 'admin-tabs_active-tab',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
            <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-tabs__tab-text',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><?php echo \Jade\Compiler::getEscapedValue($val, '"') ?></div>
          </li>
        <?php } else { ?> 
          <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-tabs__tab',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
            <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-tabs__tab-text',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><?php echo \Jade\Compiler::getEscapedValue($val, '"') ?></div>
          </li>
        <?php } ?> 
      <?php } ?> 
    </ul>
    <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
      <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__tab-content',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
        <h2<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Страница "Обо мне"</h2>
        <form<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
          <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__row',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
            <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skills-block',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
              <h3<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skills-title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Frontend</h3>
              <ul<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skills-group',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <label for="html_input"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>HTML</label>
                  <input placeholder="0" id="html_input" name="html"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-sign',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>%</div>
                </li>
                <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <label for="css_input"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>CSS</label>
                  <input placeholder="0" id="css_input" name="css"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-sign',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>%</div>
                </li>
                <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <label for="javascript_input"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>JavaScript</label>
                  <input placeholder="0" id="javascript_input" name="javascript"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-sign',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>%</div>
                </li>
              </ul>
            </div>
            <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skills-block',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
              <h3<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skills-title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Workflow</h3>
              <ul<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skills-group',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <label for="git_input"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Git</label>
                  <input placeholder="0" id="git_input" name="html"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-sign',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>%</div>
                </li>
                <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <label for="gulp_input"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Gulp</label>
                  <input placeholder="0" id="gulp_input" name="gulp"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-sign',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>%</div>
                </li>
                <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <label for="bower_input"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Bower</label>
                  <input placeholder="0" id="bower_input" name="bower"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-sign',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>%</div>
                </li>
              </ul>
            </div>
          </div>
          <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__row',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
            <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skills-block',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
              <h3<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skills-title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Backend</h3>
              <ul<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skills-group',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <label for="php_input"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>PHP</label>
                  <input placeholder="0" id="php_input" name="php"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-sign',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>%</div>
                </li>
                <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <label for="nodejs_input"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Node.js</label>
                  <input placeholder="0" id="nodejs_input" name="nodejs"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-sign',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>%</div>
                </li>
                <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <label for="mongodb_input"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>MongoDB</label>
                  <input placeholder="0" id="mongodb_input" name="mongodb"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__skill-sign',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    % 
                    
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button type="submit"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-button',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Добавить</button>
        </form>
      </div>
      <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__tab-content',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
        <h2<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Страница "Обо мне"</h2>
        <form<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
          <h3<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Добавить запись</h3>
          <input placeholder="Название" name="title"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
          <input placeholder="Дата" name="date" type="date"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <textarea placeholder="Содержание" name="content" rows="6"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-textarea',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></textarea>          <button type="submit"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-button',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Добавить</button>
        </form>
      </div>
      <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__tab-content',
  1 => 'admin-content_adtive-tab',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
        <h2<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Страница "Обо мне"</h2>
        <form<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
          <h3<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Добавить запись</h3>
          <input placeholder="Название" name="title"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
          <input placeholder="Технологии" name="tech"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
          <input name="photo" type="file"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__from-input',
  1 => 'admin-content_hidden',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
          <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-upload',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/upload.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__upload-image',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__upload-text',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Загрузить картинку </span></div>
          <button type="submit"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'admin-content__form-button',
  1 => 'admin-content_fixed-button',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Добавить</button>
        </form>
      </div>
    </div>
  </body>
</html>
