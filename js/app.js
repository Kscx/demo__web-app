/**
 * Created by hxsd on 2016/12/22.
 */
angular.module("myapp", ["ionic"])
// 配置路由
angular.module("myapp")
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        // 去掉后退按钮的文字
        $ionicConfigProvider.backButton.text("");
        /*$ionicConfigProvider.backButton.previousTitleText("");*/

        // 配置路由
        $stateProvider
        //零级路由：加载app.html，但不要直接显示....................
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/app/app.html",
                controller: ''
            })
            //一级路由：加载tabs.html，但不要直接显示
            .state("app.tabs",{
                url:"/tabs",
                abstract:true,  // 抽象地，意思是不直接显示
                views: {'menuContent' :{
                        templateUrl:"templates/tabs/tabs.html",
                        controller: ''
                    }
                }
            })
            // 二级路由
            .state("app.tabs.clothes",{
                url:"/clothes",
                views:{"tab-clothes":{
                    templateUrl:"templates/clothes/clothes.html",
                    controller:"clothesCtrl"
                }}
            })
            .state("app.tabs.detail",{
                url:"/detail?:title",
                views:{"tab-clothes":{
                    templateUrl:"templates/detail/detail.html",
                    controller:"detailCtrl"
                }}
            })
            .state("app.tabs.books",{
                url:"/books",
                views:{"tab-books":{
                    templateUrl:"templates/books/books.html",
                    controller:"booksCtrl"
                }}
            })
            .state("app.tabs.booksDetail",{
                url:"/booksDetail?:title",
                views:{"tab-books":{
                    templateUrl:"templates/booksDetail/book_detail.html",
                    controller:"booksDetailCtrl"
                }}
            })
        // 默认首页
        $urlRouterProvider.otherwise("/app/tabs/clothes");
    });