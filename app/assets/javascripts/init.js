 head.js(		"/assets/knockout.js",
                "/assets/jquery.js",
                "/assets/jquery-ui.js",
                "/assets/underscore.js",
                "/assets/jquery.gridster.js",
                "/assets/jquery.sparkline.min.js",
                "/assets/jquery.caret.js",
                "/assets/raphael.js",
                "/assets/justgage.1.0.1.js",
                "/assets/freeboard/freeboard.js",
                "/assets/freeboard/plugins/freeboard.datasources.js",
                "/assets/freeboard/plugins/freeboard.widgets.js",
                // *** Load more plugins here ***
                function(){
                    $(function()
                    { //DOM Ready
                        freeboard.initialize(true);


                        var board_config = $.parseJSON($('#board_config').val());
                        // Load Board Config if exist
                        if(board_config){
                        	freeboard.loadDashboard(board_config); 
                    	}
                    });
                });


