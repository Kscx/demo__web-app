/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("clothesCtrl", function ($scope,$http,$ionicScrollDelegate) {
        // 准备商品数据
        $scope.products = [
            {"imgsrc": "images/bizhi (1).jpg"},
            {"imgsrc": "images/bizhi (2).jpg"},
            {"imgsrc": "images/bizhi (3).jpg"},
            {"imgsrc": "images/bizhi (4).jpg"},
            {"imgsrc": "images/bizhi (5).jpg"},
            {"imgsrc": "images/bizhi (6).jpg"},
        ];
        $scope.top = function(){
            $ionicScrollDelegate.scrollTop(true);
        };

        var n=0;
        $scope.loadMore = function(){
            // 向服务器请求数据
            if(n>30){
                $scope.$broadcast("scroll.infiniteScrollComplete")
            }else{
                $http.get("templates/clothes/dd.json")
                    .success(function(data){
                        // 将返回的数据追加到已有的数据后面
                        var x = data.slice(n,n+6);
                        Array.prototype.push.apply($scope.products,x);
                    })
                    .finally(function(){
                        // 通知框架，上拉结束，撤销相应的加载图标
                        n+=6;
                        $scope.$broadcast("scroll.infiniteScrollComplete");
                });
            }
        };

    });
