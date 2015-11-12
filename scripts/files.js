




(function () {
    'use strict';

    //var fs = require('fs');
    var fs = require ('fs-plus');
    var path = '/sys/devices/platform/smapi/BAT0/';
    angular.module('app')
        .controller('batCrtl', [ '$q', '$mdDialog','$scope',function($q,$mdDialog,$scope){


          /*

           fs.readFile(path+'current_avg', 'utf8', function (err,data) {
              if (err) {
                return console.log(err);
              }
              console.log("auswurf:",data);
              $scope.current_avg = data;
              $scope.$apply();
            });

            fs.readFile(path+'current_now', 'utf8', function (err,data) {
               if (err) {
                 return console.log(err);
               }
               console.log("auswurf:",data);
               $scope.current_now = data;
               $scope.$apply();
             });*/

             setInterval(function() {
               fs.readFile(path+'current_avg', 'utf8', function (err,data) {
                  if (err) {
                    return console.log(err);
                  }
                  console.log("auswurf:",data);
                  $scope.current_avg = data;
                  $scope.$apply();
                });

               fs.readFile(path+'current_now', 'utf8', function (err,data) {
                  if (err) {
                    return console.log(err);
                  }
                  console.log("auswurf:",data);
                  $scope.current_now = data;
                  $scope.$apply();
                });

              fs.readFile(path+'cycle_count', 'utf8', function (err,data) {
                 if (err) {
                   return console.log(err);
                 }
                 console.log("auswurf:",data);
                 $scope.cycle_count = data;
                 $scope.$apply();
               });


             fs.readFile(path+'design_capacity', 'utf8', function (err,data) {
                if (err) {
                  return console.log(err);
                }
                console.log("auswurf:",data);
                $scope.design_capacity = data;
                $scope.$apply();
              });

              fs.readFile(path+'design_voltage', 'utf8', function (err,data) {
                 if (err) {
                   return console.log(err);
                 }
                 console.log("auswurf:",data);
                 $scope.design_voltage = data;
                 $scope.$apply();
               });

              fs.readFile(path+'first_use_date', 'utf8', function (err,data) {
                 if (err) {
                   return console.log(err);
                 }
                 console.log("auswurf:",data);
                 $scope.first_use_date = data;
                 $scope.$apply();
               });

               fs.readFile(path+'installed', 'utf8', function (err,data) {
                  if (err) {
                    return console.log(err);
                  }
                  console.log("auswurf:",data);
                  $scope.installed = data;
                  $scope.$apply();
                });

                fs.readFile(path+'last_full_capacity', 'utf8', function (err,data) {
                   if (err) {
                     return console.log(err);
                   }
                   console.log("auswurf:",data);
                   $scope.last_full_capacity = data;
                   $scope.$apply();
                 });

                 fs.readFile(path+'manufacture_date', 'utf8', function (err,data) {
                    if (err) {
                      return console.log(err);
                    }
                    console.log("auswurf:",data);
                    $scope.manufacture_date = data;
                    $scope.$apply();
                  });

                fs.readFile(path+'manufacturer', 'utf8', function (err,data) {
                   if (err) {
                     return console.log(err);
                   }
                   console.log("auswurf:",data);
                   $scope.manufacturer = data;
                   $scope.$apply();
                 });

                 fs.readFile(path+'power_avg', 'utf8', function (err,data) {
                    if (err) {
                      return console.log(err);
                    }
                    console.log("auswurf:",data);
                    $scope.power_avg = data;
                    $scope.$apply();
                  });

                  fs.readFile(path+'power_now', 'utf8', function (err,data) {
                     if (err) {
                       return console.log(err);
                     }
                     console.log("auswurf:",data);
                     $scope.power_now = data;
                     $scope.$apply();
                   });

                   fs.readFile(path+'remaining_capacity', 'utf8', function (err,data) {
                      if (err) {
                        return console.log(err);
                      }
                      console.log("auswurf:",data);
                      $scope.remaining_capacity = data;
                      $scope.$apply();
                    });

                    fs.readFile(path+'remaining_charging_time', 'utf8', function (err,data) {
                       if (err) {
                         return console.log(err);
                       }
                       console.log("auswurf:",data);
                       $scope.remaining_charging_time = data;
                       $scope.$apply();
                     });

                     fs.readFile(path+'remaining_percent', 'utf8', function (err,data) {
                        if (err) {
                          return console.log(err);
                        }
                        console.log("auswurf:",data);
                        $scope.remaining_percent = data;
                        $scope.$apply();
                      });

                      fs.readFile(path+'remaining_running_time', 'utf8', function (err,data) {
                         if (err) {
                           return console.log(err);
                         }
                         console.log("auswurf:",data);
                         $scope.remaining_running_time = data;
                         $scope.$apply();
                       });

                       fs.readFile(path+'remaining_running_time_now', 'utf8', function (err,data) {
                          if (err) {
                            return console.log(err);
                          }
                          console.log("auswurf:",data);
                          $scope.remaining_running_time_now = data;
                          $scope.$apply();
                        });

                        fs.readFile(path+'state', 'utf8', function (err,data) {
                           if (err) {
                             return console.log(err);
                           }
                           console.log("auswurf:",data);
                           $scope.state = data;
                           $scope.$apply();
                         });

                         fs.readFile(path+'temperature', 'utf8', function (err,data) {
                            if (err) {
                              return console.log(err);
                            }
                            console.log("auswurf:",data);
                            $scope.temperature = data;
                            $scope.$apply();
                          });

                          fs.readFile(path+'voltage', 'utf8', function (err,data) {
                             if (err) {
                               return console.log(err);
                             }
                             console.log("auswurf:",data);
                             $scope.voltage = data;
                             $scope.$apply();
                           });
            }, 500);

             /*fs.watchFile(path+'current_now', function (curr, prev) {
                console.log('the current mtime is: ' + curr);
                console.log('the previous mtime was: ' + prev);
                $scope.current_now = curr;
                $scope.$apply();
              });*/

/*
          electron.fs.readFile'/sys/devices/platform/smapi/BAT0/current_avg', 'utf8', function (err,data) {
           if (err) {
             return console.log(err);
           }
           console.log("auswurf:"data);
           $scope.data = data;
           $scope.$apply();
         });*/


         //electron.send("Hello Host! From Client.");

          /*electron.dns.resolve("http://google.com", function(err, addrs) {
            $scope.address = addrs[0];
            $scope.$apply();
          });  */

          //$scope.data = fs.readFileSync('/sys/devices/platform/smapi/BAT0/current_avg');


        }]);




})();
