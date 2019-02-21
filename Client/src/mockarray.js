var posts = [{title: "post",
        body:"asdasdasdasdasdasdasdasd",
        owner:'asdasdasd',
        categoryID:'asdasdasd',
        _id: 'asdasdasd'
        },{title: "postasidji",
        body:"edouhsdofvg<psdfivhasdipfuhjsdnlfviudhlvçjdfouilvhjndilfvh",
        owner:'asdasdasd',
        categoryID:'asdasdasd',
        _id: 'asdasdasdasdasdasdasdasdasdaasdasd'
        }
],
comments = [
       { body:"asdasdasdasdasdasdasdasd",
        owner:'asdasdasd',
        postID:'asdasdasd',
        _id: '64654654654'}],
categories=[{name:'category',
         photo: 'https://i.ndtvimg.com/i/2017-06/red-banana-benefits_620x350_41498045864.jpg',
        _id: 'asdasdasd',
    }],
users=[{username:'asdasdasd', 
        password:'pass',
        email: '@email.mock',
        _id: 64654654654
    }];

for (var i =0; i < 1000; i++){
    var ele = i;
    posts.push(
        {title: "post"+ele,
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar varius condimentum. Mauris mattis magna risus, sit amet lobortis magna aliquam at. Cras vitae metus eu turpis tristique faucibus sit amet vel odio. Quisque euismod neque quis urna aliquam, at mollis nunc imperdiet. Nam elementum lacinia libero quis condimentum. Suspendisse velit mauris, semper vitae enim ut, rhoncus dignissim mi. Vestibulum non orci sagittis, vulputate velit bibendum, efficitur augue. Integer nunc libero, rutrum eu tristique nec, gravida eget nunc. Aenean ac metus consectetur, rhoncus felis at, lobortis lorem. Pellentesque sodales, mi in ultricies porta, nisi eros porta nisl, id hendrerit est est eget mi. Nullam interdum, libero ut elementum dictum, neque nibh ornare urna, et malesuada leo mauris ut arcu.",
        owner:ele,
        categoryID:ele+10,
        _id: ele+100
        }
    )
}
for (var i =0; i < 10; i++){
    var ele = i;
    comments.push(
        {
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar varius condimentum. Mauris mattis magna risus, sit amet lobortis magna aliquam at. Cras vitae metus eu turpis tristique faucibus sit amet vel odio. Quisque euismod neque quis urna aliquam, at mollis nunc imperdiet. Nam elementum lacinia libero quis condimentum. Suspendisse velit mauris, semper vitae enim ut, rhoncus dignissim mi. Vestibulum non orci sagittis, vulputate velit bibendum, efficitur augue. Integer nunc libero, rutrum eu tristique nec, gravida eget nunc. Aenean ac metus consectetur, rhoncus felis at, lobortis lorem. Pellentesque sodales, mi in ultricies porta, nisi eros porta nisl, id hendrerit est est eget mi. Nullam interdum, libero ut elementum dictum, neque nibh ornare urna, et malesuada leo mauris ut arcu.",
        owner:ele,
        postID: ele+10,
        _id: ele+100
        }
    )
}
for (var i =0; i < 10; i++){
    var ele = i;
    categories.push(
        {name:'category'+ele,
         photo: 'https://res.cloudinary.com/tahelena/image/upload/v1549908924/PhotoProject/pictures/places/DSC_0089.jpg',
        _id: ele+100
    }
    )
}
for (var i =0; i < 10; i++){
    var ele = i;
    users.push(
        {username:'username'+ele, 
        password:'pass'+ele,
        email: ele+'@email.mock',
        _id: ele+100
    }
    )
}

module.exports = {posts, comments,categories,users};