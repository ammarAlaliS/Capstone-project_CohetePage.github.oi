const Courses = document.querySelector('.Courses');

const CoursesData = [
  {
    img: './src/icon/HTML5_logo.png',
    title: 'HTML',
    info: 'Welcome to the HTML course offered by SkillMentor! In this course, you will delve into the world of HyperText Markup Language (HTML), the fundamental building block of the web.',
  },
  {
    img: './src/icon/cssLogo.png',
    title: 'CSS',
    info: 'In this course, you will dive into the world of CSS and learn how to apply styles to various elements, create stunning page layouts, and make responsive designs that adapt to different devices.',
  },
  {
    img: './src/icon/javaScript.jpg',
    title: 'JavaScript',
    info: 'In this course, you will learn the core concepts of JavaScript, from variables and data types to functions, loops, how to Object Model (DOM) works to create responsive and interactive web pages. ',
  },
  {
    img: './src/icon/git.png',
    title: 'GIT',
    info: "In this course, you'll embark on a journey to master the ins and outs of Git, from creating and managing repositories to branching, merging, and resolving conflicts. Discover how to track changes and collaborate ",
  },

  {
    img: './src/icon/ruby.png',
    title: 'RUBY',
    info: "In this course, you'll dive into the world of Ruby and learn its unique syntax, object-oriented principles, and extensive libraries. From mastering basic data types and control structures.",
  },
];

function componetCourses(CoursesData) {
  return CoursesData.map((courses) => {
    const { img, title, info } = courses;

    return `
    <div class="boxCourses">
        <div class="boxCoursesInside">
            <img src="${img}" alt="">
            <h2>${title}</h2>
            <P>${info}</P>
        </div>
    </div>
    `;
  }).join('');
}

Courses.innerHTML = componetCourses(CoursesData);
