<?php 
/*header('Access-Control-Allow-Origin:* ');// alowed client
include("connection.php"); */
include ("qrlib.php"); //qr code
/*session_start();
$_SESSION['UserId']="1";
$user=$_SESSION['UserId'] ;
$id="1";
//////
$name = "SELECT Name  FROM user WHERE UserId = '$user' ";
$DateOfBirth = "SELECT DateOfBirth  FROM user WHERE UserId = '$user' ";
$Nationality  = "SELECT Nationality  FROM user WHERE UserId = '$user' ";
$GroupId  = "SELECT GroupId  FROM user WHERE UserId = '$user' ";*/
$code ="The name is : Ahmed\n The date of Birth : 3-10-1993 \n The Nationality is Saudi \n The Group Id is : 324\n ";
$eccLevel = 'L';
$qrTab = QRcode::text($code, false, $eccLevel);
            $size = count($qrTab);
                
            $barcode_array['num_rows'] = $size;
            $barcode_array['num_cols'] = $size;
            $barcode_array['bcode'] = array();
                
            foreach ($qrTab as $line) {
                $arrAdd = array();
                foreach(str_split($line) as $char)
                    $arrAdd[] = ($char=='1')?1:0;
                $barcode_array['bcode'][] = $arrAdd;
            }
                    
            return $barcode_array;
//QRcode::png($user1);
?>