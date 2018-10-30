var student1 = {
  rollNumber: 'A1',
  avatar: 'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-ha-noi-6.jpg',
  name: 'La',
  address: 'Ha Noi',
  phone: '0123456898'
};
var student2 = {
  rollNumber: 'A2',
  avatar: 'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-ha-noi-6.jpg',
  name: 'Li',
  address: 'Ha Noi',
  phone: '0112223334'
};
var student3 = {
  rollNumber: 'A3',
  avatar: 'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-ha-noi-6.jpg',
  name: 'Lo',
  address: 'Ha Noi',
  phone: '0122333444'
};
var student4 = {
  rollNumber: 'A4',
  avatar: 'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-ha-noi-6.jpg',
  name: 'Linh',
  address: 'Ha Noi',
  phone: '0123456789'
};
var student5 = {
  rollNumber: 'A4',
  avatar: 'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-ha-noi-6.jpg',
  name: 'Linh',
  address: 'Ha Noi',
  phone: '0123456789'
};
var student6 = {
  rollNumber: 'A4',
  avatar: 'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-ha-noi-6.jpg',
  name: 'Linh',
  address: 'Ha Noi',
  phone: '0123456789'
};
var listStudent = new Array();
listStudent.push(student1);
listStudent.push(student2);
listStudent.push(student3);
listStudent.push(student4);
listStudent.push(student5);
listStudent.push(student6);

var classMainContent = document.getElementsByClassName('main-content');
if (classMainContent != null && classMainContent.length > 0) {
  var mainContent = classMainContent[0];
  for (var i = 0; i < listStudent.length; i++) {
    var itemContent = '<div class="personal-infor">';
    itemContent += '<div class="avatar" style="background-image: url(' + listStudent[i].avatar + '); background-size: cover">';
    itemContent += '</div>';
    itemContent += '<div class="line-infor">';
    itemContent += '<label>Rollnumber</label>';
    itemContent += '<div>' + listStudent[i].rollNumber + '</div>';
    itemContent += '</div>';
    itemContent += '<div class="line-infor">';
    itemContent += '<label>Name</label>';
    itemContent += '<div>' + listStudent[i].name + '</div>';
    itemContent += '</div>';
    itemContent += '<div class="line-infor">';
    itemContent += '<label>Phone</label>';
    itemContent += '<div>' + listStudent[i].phone + '</div>';
    itemContent += '</div>';
    itemContent += '<div class="line-infor">';
    itemContent += '<label>Address</label>';
    itemContent += '<div>' + listStudent[i].address + '</div>';
    itemContent += '</div>';
    itemContent+='</div>';
    mainContent.innerHTML+= itemContent;
  }
}

