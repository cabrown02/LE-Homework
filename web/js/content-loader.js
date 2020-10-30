//
// DYNAMIC CONTENT OBJECT
//

// store all the necessary dynamic content here
let playKits = {
    kitOne: {
        title: "The Looker Play Kit",
        age: "suitable for weeks 0-12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ante massa, ut blandit diam finibus in. Nam a ligula placerat, eleifend ante eget, vehicula turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sed lorem pretium, volutpat ligula sed, accumsan velit. Aenean ut orci vitae turpis faucibus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam iaculis sit amet justo non finibus. Fusce laoreet ac lorem et elementum. Integer rhoncus sagittis tempor. Cras semper auctor ipsum, ut tristique ligula tristique sed. Aenean gravida, dui eget sollicitudin pharetra, nulla eros rhoncus risus, vitae commodo libero leo eget lorem.",
        images: ["./images/kit1/K1_2_Standing_Card_Holder.png", "./images/kit1/K1_3_Simple_BW_Card_Set.png", "./images/kit1/K1_4_Travel_Card_Holder.png"]
    },
    kitTwo: {
        title: "The Charmer Play Kit",
        age: "suitable for months 3-4",
        description: "Mauris sit amet risus est. Donec id sollicitudin ligula, sit amet pulvinar massa. Vestibulum pellentesque, sapien et pharetra aliquam, turpis felis porta nulla, ac interdum dui nisi sed felis. Etiam maximus metus sed magna ullamcorper porttitor. Maecenas vehicula mauris sed ex tincidunt viverra. Suspendisse consequat aliquet arcu eget tincidunt. Fusce sagittis, diam eu maximus ultricies, erat orci vulputate ex, vitae blandit ipsum ex eget urna. Vestibulum vitae fermentum felis.",
        images: ["./images/kit2/K2_1_Wooden_Rattle.png","./images/kit2/K2_2_Rolling_Bell.png", "./images/kit2/K2_5_BW_Card_Set.png"]
    },
    kitThree: {
        title: "The Senser Play Kit",
        age: "suitable for months 5-6",
        description: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tempus bibendum ullamcorper. Vivamus sit amet hendrerit felis. Praesent ultrices tortor ligula, ornare porta ex mollis eu. Aenean in ligula quis lorem sodales varius molestie sit amet massa. Proin nisl diam, interdum in enim vitae, dignissim varius felis. Vestibulum egestas eu purus a vehicula.",
        images: ["./images/kit3/K3_1_Magic_Tissue_Box.png","./images/kit3/K3_2_Magic_Tissues.png", "./images/kit3/K3_3_Montessori_Ball.png"]
    },
    kitFour: {
        title: "The Inspector Play Kit",
        age: "suitable for months 7-8",
        description: "Duis varius mauris vel elit varius laoreet. Donec tristique mollis odio quis gravida. Phasellus et orci ac tellus dignissim feugiat vel vitae diam. Quisque lectus magna, bibendum sit amet odio id, ultricies pulvinar ante. Mauris vitae vestibulum dui, sit amet tincidunt quam. Integer iaculis a leo quis dignissim. Ut in nunc posuere, rhoncus diam in, sollicitudin enim. Vivamus hendrerit, mauris ac vulputate cursus, lectus massa faucibus augue, vitae feugiat risus mi sed orci. Pellentesque rutrum vitae tellus vitae hendrerit. Donec gravida, dui eleifend porta suscipit, turpis leo iaculis arcu, nec venenatis lacus tortor nec metus.",
        images: ["./images/kit4/K4_1_Ball_Drop_Box.png","./images/kit4/K4_2_Wood_Ball_Set.png","./images/kit4/K4_3_My_First_Signs_Board.png"]
    },
    kitFive: {
        title: "The Explorer Play Kit",
        age: "suitable for months 9-10",
        description: "Nunc risus metus, ultrices sollicitudin ultricies et, malesuada et turpis. Aliquam placerat dui sed posuere finibus. Sed quis elementum ex. Donec ultricies risus at nulla efficitur, sed blandit ipsum feugiat. Vivamus nisl urna, malesuada id tellus ac, venenatis aliquam lectus. Maecenas facilisis nec neque ac cursus. Nunc quis magna semper, blandit arcu nec, maximus nisi. Cras in lorem non dolor congue vulputate et vel sem.",
        images: ["./images/kit5/K5_1_First_Blocks.png","./images/kit5/K5_3_Egg_Cup.png", "./images/kit5/K5_4_Shapes_Bean_Bags.png"]
    },
    kitSix: {
        title: "The Thinker Play Kit",
        age: "suitable for months 11-12",
        description: "Maecenas et consectetur lectus. Curabitur justo turpis, pellentesque in viverra a, tincidunt id libero. Morbi pellentesque nulla justo, in hendrerit metus ornare ac. In a elit at nisl cursus lobortis nec ut metus. Maecenas turpis massa, semper quis scelerisque eu, euismod non erat. Pellentesque id ex eget magna egestas auctor. Nulla consectetur facilisis velit, vitae faucibus risus. Nulla euismod, justo quis sodales ornare, felis urna gravida velit, sed elementum elit turpis id orci. Nam mollis tempus purus a sodales. Phasellus tristique volutpat posuere. Suspendisse potenti. Pellentesque eget consequat metus, sed aliquam metus. In hac habitasse platea dictumst.",
        images: ["./images/kit6/K6_1_Baby_Avery.png","./images/kit6/K6_3_Stacking_Stones.png","./images/kit6/K6_5_Pincer_Puzzle.png"]
    },
};

//
// FUNCTIONS
//
// Function: Return the number of years between two dates
const yearsDiff = (d1, d2) => {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff =  date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
};

// Function: Return the number of months between two dates
const monthsDiff = (d1, d2) => {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let years = yearsDiff(d1, d2);
    let months =(years * 12) + (date2.getMonth() - date1.getMonth()) ;
    return months;
};

// Function: Dynamically load content into the product page
const contentLoader = (title, age, description, photo1, photo2, photo3) => {
    $('#dynamic-breadcrumb').html(title);
    $('#dynamic-title').html(title);
    $('#dynamic-age').html(age);
    $('#dynamic-description').html(description);
    $('.product-img-one').attr('src', photo1);
    $('.product-img-two').attr('src', photo2);
    $('.product-img-three').attr('src', photo3);
};

//
// LOGIC
//

// Listener for birth/due date
$('#birth-date').on('change', function() {
    // declare variables
    let today = new Date().getTime(),
    birthDate = (new Date($('#birth-date').val())).getTime(),
    monthsOld = monthsDiff(birthDate, today);

    // debugging for sanity
    //console.log(today);
    //console.log(birthDate);
    //console.log(monthsOld + " Months old");

    if (monthsOld <= 2) {
        contentLoader(
            playKits.kitOne.title, 
            playKits.kitOne.age, 
            playKits.kitOne.description, 
            playKits.kitOne.images[0], 
            playKits.kitOne.images[1],
            playKits.kitOne.images[2]
        );
    } else if (monthsOld >= 3 && monthsOld <= 4) {
        contentLoader(
            playKits.kitTwo.title, 
            playKits.kitTwo.age, 
            playKits.kitTwo.description, 
            playKits.kitTwo.images[0], 
            playKits.kitTwo.images[1],
            playKits.kitTwo.images[2]
        );
    } else if (monthsOld >= 5 && monthsOld <= 6) {
        contentLoader(
            playKits.kitThree.title, 
            playKits.kitThree.age, 
            playKits.kitThree.description, 
            playKits.kitThree.images[0], 
            playKits.kitThree.images[1],
            playKits.kitThree.images[2]
        );
    } else if (monthsOld >= 7 && monthsOld <= 8) {
        contentLoader(
            playKits.kitFour.title, 
            playKits.kitFour.age, 
            playKits.kitFour.description, 
            playKits.kitFour.images[0], 
            playKits.kitFour.images[1],
            playKits.kitFour.images[2]
        );
    } else if (monthsOld >= 9 && monthsOld <= 10) {
        contentLoader(
            playKits.kitFive.title, 
            playKits.kitFive.age, 
            playKits.kitFive.description, 
            playKits.kitFive.images[0], 
            playKits.kitFive.images[1],
            playKits.kitFive.images[2]
        );
    } else if (monthsOld >= 11 && monthsOld <= 12) {
        contentLoader(
            playKits.kitSix.title, 
            playKits.kitSix.age, 
            playKits.kitSix.description, 
            playKits.kitSix.images[0], 
            playKits.kitSix.images[1],
            playKits.kitSix.images[2]
        );
    } else {
        contentLoader(
            playKits.kitSix.title, 
            playKits.kitSix.age, 
            playKits.kitSix.description, 
            playKits.kitSix.images[0], 
            playKits.kitSix.images[1],
            playKits.kitSix.images[2]
        );
    }
});