<?php

echo "<script>alert('Ваше письмо успешно отправленно!');</script>";
if ($_SERVER["REQUEST_METHOD"] == "POST") {

	if ( isset ( $_POST ['send-cell'] ) ) {
		if ( isset ( $_POST ['fname'] ) &&  isset ( $_POST ['phone'] ) ) {
			$fname = $phone = "";

			$fname = test_input($_POST["fname"]);
			$phone = test_input($_POST["phone"]);

			if ( ( $fname != "" ) && ( $phone != "") ) { //Проверка отправилось ли наше поля name и не пустые ли они
			  $to = 'mozgkota@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
			  $subject = 'Обратный звонок'; //Загаловок сообщения
			  $message = '
			    <html>
			      <head>
			        <title>'.$subject.'</title>
			      </head>
			      <body>
			        <p>Имя: '.$_POST['fname'].'</p>
			        <p>Телефон: '.$_POST['phone'].'</p>                        
			      </body>
			    </html>'; //Текст нащего сообщения, можно использовать HTML теги
			  $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
			  $headers .= "From: С сайта юридической компании <d.k.yozhikov@mail.ru>\r\n"; //Наименование и почта отправителя
			  mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
			  // header("Location: " . $_SERVER['HTTP_REFERER']);
			  echo "<script>alert('Ваше письмо успешно отправленно!');</script>";
			}
		}
	}

	if ( isset ( $_POST ['send-form-contact'] ) ) {
		if ( isset ( $_POST ['name'] ) &&  isset ( $_POST ['email'] ) &&  isset ( $_POST ['message'] ) ) { //Проверка отправилось ли наше поля name и не пустые ли они
			$name = test_input($_POST["name"]);
			$email = test_input($_POST["email"]);
			$message = test_input($_POST["message"]);

			if ( ( $name != "" ) && ( $email != "" )  && ( $message != "" ) ) { //Проверка отправилось ли наше поля name и не пустые ли они
			  $to = 'mozgkota@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
			  $subject = 'С формы обратной связи сайта юридической компании'; //Загаловок сообщения
			  $message = '
			    <html>
			      <head>
			        <title>'.$subject.'</title>
			      </head>
			      <body>
			        <p>Имя: '.$name.'</p>
			        <p>E-mail: '.$email.'</p>
			        <p>Сообщение: '.$message.'</p>                         
			      </body>
			    </html>'; //Текст нащего сообщения, можно использовать HTML теги
			  $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
			  $headers .= "From: С сайта юридической компании <d.k.yozhikov@mail.ru>\r\n"; //Наименование и почта отправителя
			  mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
			  // header("Location: " . $_SERVER['HTTP_REFERER'] );
			  echo "<script>alert('Ваше письмо успешно отправленно!');</script>";
			}
		}
	}

}

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

?>