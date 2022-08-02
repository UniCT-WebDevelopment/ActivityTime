import { trigger,animate, transition, style ,group ,query } from "@angular/animations";
import { Optional } from "@angular/core";

export const slideInAnimation = trigger("slideInAnimation", [
    transition('* <=> *', [
        query(':enter, :leave', style({position:'fixed',width:'100%', zIndex: 2}), {optional:true}),
        group([
            query(':enter',[
                style({transform: 'translateX(100%)'}),
                animate('0.5s ease-out', style({transform: 'translateX(0%)'}))
            ],{optional:true}),
            query(':leave',[
                style({transform:'translate(0%)'}),
                animate('0.5s ease-out',style({transform: 'translate(-100%'}))
            ], {optional:true})
        ])

    ])
]);