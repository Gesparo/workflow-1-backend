var tabsSwitcher = (function () {
    var tabs = $('.admin-tabs__tab'),
        tabsContent = $('.admin-content__tab-content');

    var init = function(){
        if( !tabs || ! tabsContent )
        {
            return false;
        }

        tabs.on('click', function(e){
            e.preventDefault();

            var $this = $(this);

            tabsContent.eq($this.index()).addClass('admin-content_adtive-tab').siblings().removeClass('admin-content_adtive-tab');
            $this.addClass('admin-tabs_active-tab').siblings().removeClass('admin-tabs_active-tab');
        });
    };
    
    return {
        init : init
    };
})();