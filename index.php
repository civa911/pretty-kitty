<?php
$dbhost = 'localhost';
$dbuser= 'newuser';
$dbpass = 'password';
$conn = mysqli_connect($dbhost , $dbuser , $dbpass,"test");
if(!$conn){
        die('Could not connect:'.mysqli_error($conn));
}
echo 'Connected successfully </br>';
$sql="CREATE TABLE student(".
        "USN INT NOT NULL,".
        "Name VARCHAR(100) NOT NULL,".
        "Marks VARCHAR(40) NOT NULL);";
mysqli_select_db($conn,'test');
$retval=mysqli_query($conn,$sql);
if(! $retval){
        die('Could not create table:'.mysqli_error($conn));
}
echo "Table created successfully\n";
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pretty Kitty</title>

  <link rel="icon" href="1/cat.png" type="image/x-icon">
  <link rel="stylesheet" href="style.css" type="text/css">
  
</head>
<body>
  <header>
    <!-- шапка сайта -->
  </header>
  <main class="container">
    <include content />


    <div class="w">  
      <br>
      <img src="1/logo_cat.jpg" class="logo"  >
      <br>
      <h1>МЫ Pretty Kitty</h1><br>
      <div class="o">
        <h2><b>Всем нам порой нужна небольшая порция любви и 
          умиротворения в нашей быстрой и насыщенной жизни. И что может 
          быть лучше, чем нежные, милые котята, чтобы снизить уровень 
          стресса и вызвать положительные эмоции? </b></h2>
<br>
  
        <h3><i>Именно поэтому существует генератор милых котят - 
          сервис, который предназначен для помощи пользователям в этом нелегком деле! </i></h3>
<br>
        <p>Каждый клик по кнопке "Сгенерировать" приводит к появлению новой картины: маленький 
          рыжик, белоснежная мохнатая комочек или нежный пушистый котенок с серыми глазами. 

          Милые котята помогают вам сбросить напряжение и расслабиться после напряженного 
          рабочего дня или просто погружения в суету городской жизни. Они вдохновляют на доброту,
           улучшают настроение и выводят нас за рамки повседневных забот. 
          
          Генератор милых котят - это именно то, чего вам не хватало! Позвольте себе немного
           радуги в трудный день и получите прилив позитивных эмоций, благодаря нашему сервису. 
           Вы заслуживаете милых котят в вашей жизни!
          </p>
      </div>
    </div>
    <br><br>
    <hr>
    <br><br><br>

    
    <br>

    
    <h1>Генерирация милого котика:</h1>
    <br>
    <button id="randomize-button" class="button-a"><h3>Показать случайного котика</h3></button>
    <br><br>
    <div id="image-container" class="image-container-cla"></div>
    <br>
    <button id="hide-button" class="button-a"><h3>Скрыть котика</h3></button>
 

      <br><br><br><br>


      <!-- 2 fun -->
    
        
        
         <h1>Выберите более милого котика:</h1>
         <br>
         <div id="imageContainer1"></div>
         <br>
         <button class="button-a" onclick="nextPair()"><h3>Следующая пара</h3></button>
        
         <button class="button-a" onclick="showSelected()"><h3>Показать выбранные</h3></button>
        
         <button id="hide-button" class="button-a" href="#" onclick="location.reload(); return false;" ><h3>Начать заново</h3></button>
         <br><br>

         <div id="results">
          <h1>Выбранные изображения:</h1>
         </div>

         <br><br><br>
         <div id="selectedContainer"></div>
        <br>

<br>
        <div id="options-container">
          <h1>Выберите параметры генерации:</h1>
          <br>
          <label><h3>Настроение:
            <select id="mood-option">
            </h3>
              <option value="happy">Веселое</option>
              <option value="sad">Грустное</option>
              <option value="angry">Злое</option>
              <option value="sleep">Спящее</option>
              <option value="surprised">Удивленное</option>
            </select>
          </label>
          <button  class="button-a" id="generate-btn"><h3>Генерировать</h3></button>
          <button  class="button-a" id="generate-btn" href="#" onclick="location.reload(); return false;"><h3>Сбросить</h3></button>
        </div>
        <br>
        <div id="image-container">
        
          <h2>Выбранное изображение:</h2>
        
          <img id="generated-img">
          </div>
        </div>

        <br><br>
        <br><br>
<br><br>

<h1>Интересные виды кошек!</h1>
<br>
    <div class="w3-row-padding w3-padding-16 w3-center" id="food">
      <div class="w3-quarter">
        <img src="https://resizer.mail.ru/p/15f2f60d-4cdf-5cd7-8798-bd58c3539997/AQAOwXsy-DsamR7iEeutJPIx5goZUUWLvt524es69g2wIYFSD_CUd32Gp4C8Ie57JOCrasX4MqAbC8LycHZi3JtcKBg.webp" alt="Sandwich" style="width: 500px;">
        <h1>Барханный кот</h1>
        <p>На первый взгляд песчаный кот, он же барханный, чем-то напоминает лисичку-фенека, 
          но все же это самая настоящая кошка: ведет ночной образ жизни, много спит и питается 
          преимущественно мелкими грызунами. 
        </p>
      </div>
      <br><br> <br><br>
      <div class="w3-quarter">
        <img src="https://resizer.mail.ru/p/810ee7cd-f6ec-5407-8a48-232891c2622e/AQAOVguB96bfqHkP6iymTsvEi4So0ZlXPjNIaj_deZF3adD7-zPrpEhhBGPQX2qHAOPUs7Zk6Iboh6nuyUaK2ONy6Nk.webp" alt="Steak" style="width:500px">
        <h1>Андская кошка</h1>
        <p>Это очень редкий представитель семейства кошачьих — андские кошки находятся под угрозой полного исчезновения, на Земле их осталось всего около двух тысяч.</p>
      </div>
      <br><br> <br><br>
      <div class="w3-quarter">
        <img src="https://resizer.mail.ru/p/3a1eaf6d-7336-50da-9c8a-bb44dfc06f9e/AQAONI5YPPniztXr10tExDFZs0YY3kjjbMeCAxlJITyYTCEVHRybvw1zTVoN_-nDvhrtPCdgowi35bHvPs4WNEQrUrk.webp" alt="Cherries" style="width:500px">
        <h1>Кошка Темминка</h1>
        <p>Эта хищница получила свое название в честь биолога-натуралиста из Нидерландов, который впервые написал о ней в 1827 году.</p>
      </div>
      <br><br> <br><br>
      <div class="w3-quarter">
        <img src="https://resizer.mail.ru/p/21b73beb-1aa7-5207-abde-9422ae3f4b5b/AQAOdm-JRO2N_F23KbzYMFtzb7ddY0zc2QjTq5NPT5qN6SOoHft8G8qz4YWQnPpEaoDiMw08knPqvTaIegMlr7NjLUY.webp" alt="Pasta and Wine" style="width:500px">
        <h1>Кошка-рыболов</h1>
        <p>Кошка-рыболов исходя из своего названия славится тем, что умеет ловить рыбу и хорошо плавает. Эти животные очень сильные, и их челюсти такие же мощные, как у собак-питбулей. </p>
      </div>
    </div>

    
    

  </main>
<br><br><br><br><br>
  <footer class="w">
   

     <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    

     <br>
      <div class="w3-third">
        <h2 class="w3-large">CREATION</h2>
        <ul class="w3-ul w3-hoverable">
          
            <img src="1/cat.jpg" class="w3-left w3-margin-right"   >
            <div class="w3-large"> <h2>
              © 2023 | Made Pretty Kitty<h2></div>
          
        
        </ul>
      </div>
  
     
  </footer>

  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  
 <script src="script.js"></script>
</body>
</html>