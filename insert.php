<?php
//variable to recover input
$first = $_POST['first'];
$last = $_POST['last'];
$age = $_POST['age'];
$country = $_POST['country'];
//file json
$file = 'clients.json';
$data = json_decode(file_get_contents($file),true);
$newdata = array('Firstname' => $first, 'Lastname' => $last, 'Age' => $age, 'Country' => $country);
array_push($data['clients'], $newdata);
file_put_contents($file, json_encode($data));
?>