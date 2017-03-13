/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("booksDetailCtrl", function ($scope,$stateParams) {
        //console.log("title:" + $stateParams.title);
        // 准备商品数据
        $scope.products = [
            {"imgsrc": "images/zuixin (1).jpg"},
            {"imgsrc": "images/zuixin (2).jpg"},
            {"imgsrc": "images/zuixin (3).jpg"},
            {"imgsrc": "images/zuixin (4).jpg"},
            {"imgsrc": "images/zuixin (5).jpg"},
            {"imgsrc": "images/zuixin (6).jpg"},
            {"imgsrc": "images/zuixin (7).jpg"},
            {"imgsrc": "images/zuixin (8).jpg"},
            {"imgsrc": "images/zuixin (9).jpg"},
            {"imgsrc": "images/zuixin (10).jpg"},
            {"imgsrc": "images/zuixin (11).jpg"},
            {"imgsrc": "images/zuixin (12).jpg"},
            {"imgsrc": "images/zuixin (13).jpg"},
            {"imgsrc": "images/zuixin (14).jpg"},
            {"imgsrc": "images/zuixin (15).jpg"},
            {"imgsrc": "images/zuixin (16).jpg"},
            {"imgsrc": "images/zuixin (17).jpg"},
            {"imgsrc": "images/zuixin (18).jpg"},
            {"imgsrc": "images/zuixin (19).jpg"},
            {"imgsrc": "images/zuixin (20).jpg"},
            {"imgsrc": "images/zuixin (21).jpg"},
            {"imgsrc": "images/zuixin (22).jpg"},
            {"imgsrc": "images/zuixin (23).jpg"},
            {"imgsrc": "images/zuixin (24).jpg"},
            {"imgsrc": "images/zuixin (25).jpg"},
            {"imgsrc": "images/zuixin (26).jpg"},
            {"imgsrc": "images/zuixin (27).jpg"},
            {"imgsrc": "images/zuixin (28).jpg"},
            {"imgsrc": "images/zuixin (29).jpg"},
            {"imgsrc": "images/zuixin (30).jpg"}
        ];
        $scope.product = {};
        angular.forEach($scope.products,function(product,index){
            if(product.imgsrc == $stateParams.title){
                $scope.product = product;
                return;
            }
        });

    });

