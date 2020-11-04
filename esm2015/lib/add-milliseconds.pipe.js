import { NgModule, Pipe } from '@angular/core';
import addMilliseconds from 'date-fns/addMilliseconds';
export class AddMillisecondsPipe {
    transform(date, amount) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return addMilliseconds(date, amount);
    }
}
AddMillisecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddMilliseconds' },] }
];
export class AddMillisecondsPipeModule {
}
AddMillisecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddMillisecondsPipe],
                exports: [AddMillisecondsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1pbGxpc2Vjb25kcy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvYWRkLW1pbGxpc2Vjb25kcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGVBQWUsTUFBTSwwQkFBMEIsQ0FBQztBQUd2RCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFNBQVMsQ0FBQyxJQUFzQixFQUFFLE1BQWM7UUFDOUMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxlQUFlLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTs7QUFjckMsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBSnJDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRNaWxsaXNlY29uZHMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zQWRkTWlsbGlzZWNvbmRzJyB9KVxuZXhwb3J0IGNsYXNzIEFkZE1pbGxpc2Vjb25kc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRhdGUsIGFtb3VudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQWRkTWlsbGlzZWNvbmRzUGlwZV0sXG4gIGV4cG9ydHM6IFtBZGRNaWxsaXNlY29uZHNQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRNaWxsaXNlY29uZHNQaXBlTW9kdWxlIHt9XG4iXX0=