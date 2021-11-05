<?php
    
    $span1 = '网信办要求取消所有涉明星艺人榜单';
    $span2 = '23呃';
    $span3 = 'hahahahahah';
    
    header('Content-Type:application/json; charset=utf-8');

    $arr = array('num1'=>1,'num2'=>2,'num3'=>3,'num4'=>4,'span1'=>$span1,'span2'=>$span2,'span3'=>$span3);

    exit(json_encode($arr));
?>