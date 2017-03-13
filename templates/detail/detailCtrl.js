/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("detailCtrl", function ($scope,$stateParams) {
        //console.log("title:" + $stateParams.title);
        // 准备商品数据
        $scope.products = [
                {"imgsrc": "images/bizhi (1).jpg"},
                {"imgsrc": "images/bizhi (2).jpg"},
                {"imgsrc": "images/bizhi (3).jpg"},
                {"imgsrc": "images/bizhi (4).jpg"},
                {"imgsrc": "images/bizhi (5).jpg"},
                {"imgsrc": "images/bizhi (6).jpg"},
                {"imgsrc": "images/bizhi (7).jpg"},
                {"imgsrc": "images/bizhi (8).jpg"},
                {"imgsrc": "images/bizhi (9).jpg"},
                {"imgsrc": "images/bizhi (10).jpg"},
                {"imgsrc": "images/bizhi (11).jpg"},
                {"imgsrc": "images/bizhi (12).jpg"},
                {"imgsrc": "images/bizhi (13).jpg"},
                {"imgsrc": "images/bizhi (14).jpg"},
                {"imgsrc": "images/bizhi (15).jpg"},
                {"imgsrc": "images/bizhi (16).jpg"},
                {"imgsrc": "images/bizhi (17).jpg"},
                {"imgsrc": "images/bizhi (18).jpg"},
                {"imgsrc": "images/bizhi (19).jpg"},
                {"imgsrc": "images/bizhi (20).jpg"},
                {"imgsrc": "images/bizhi (21).jpg"},
                {"imgsrc": "images/bizhi (22).jpg"},
                {"imgsrc": "images/bizhi (23).jpg"},
                {"imgsrc": "images/bizhi (24).jpg"},
                {"imgsrc": "images/bizhi (25).jpg"},
                {"imgsrc": "images/bizhi (26).jpg"},
                {"imgsrc": "images/bizhi (27).jpg"},
                {"imgsrc": "images/bizhi (28).jpg"},
                {"imgsrc": "images/bizhi (29).jpg"},
                {"imgsrc": "images/bizhi (30).jpg"},
                {"imgsrc": "images/bizhi (31).jpg"},
                {"imgsrc": "images/bizhi (32).jpg"},
                {"imgsrc": "images/bizhi (33).jpg"},
                {"imgsrc": "images/bizhi (34).jpg"},
                {"imgsrc": "images/bizhi (35).jpg"},
                {"imgsrc": "images/bizhi (36).jpg"}
        ];
        $scope.product = {};
        angular.forEach($scope.products,function(product,index){
            if(product.imgsrc == $stateParams.title){
                $scope.product = product;
                return;
            }
        });

    });

