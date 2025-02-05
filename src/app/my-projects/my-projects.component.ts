import { CommonModule } from '@angular/common';
import { Component, HostListener  } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { SetLanguageService } from './../set-language.service';


@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent, ProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  globalLanguage: string = 'DE';
  staticTexts = {
    english: {
      headline:'My Projects',
      project: 'Project'
    },
    german: {
      headline: 'Meine Projekte',
      project: 'Projekt'
    }
  }
  activeButton: any = 0;
  triggerAnimation: boolean = false;
  showTitle: boolean = window.innerWidth > 1200;
  projectsGerman: any = [
    { title: 'El pollo Loco',
      headline1:'Über das Projekt',
      description1: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.', 
      duration: '3 Wochen',
      headline2: 'Wie ich meine Arbeite strukturiert habe', 
      description2: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.',
      headline3: 'Meine Erfahrung',
      description3: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
    { title: 'Join',
      headline1:'Join',
      description1: 'A spicy chicken restaurant app', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
    { title: 'Ring of Fire',
      headline1:'Ring of Fire',
      description1: 'A spicy chicken restaurant app', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
    { title: 'Ring of Fire',
      headline1:'Ring of Fire',
      description1: 'A spicy chicken restaurant app', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
  
  ];

  projectsEnglish: any = [
    { title: 'El pollo Loco',
      headline1:'About the project',
      description1: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.',
      headline3: ' My group work experience',
      description3: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
    { title: 'Join',
      headline1:'Join',
      description1: 'A spicy chicken restaurant app', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
    { title: 'Ring of Fire',
      headline1:'Ring of Fire',
      description1: 'A spicy chicken restaurant app', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
    { title: 'Ring of Fire',
      headline1:'Ring of Fire',
      description1: 'A spicy chicken restaurant app', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
  
  ];
  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.showTitle = window.innerWidth > 900;
  }
 
  activateBtn(position: number) {
    this.triggerAnimation = false; 
    setTimeout(() => {
      this.activeButton = position;
      this.triggerAnimation = true; 
    }, 50); 
  }
}
