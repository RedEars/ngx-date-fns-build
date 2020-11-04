import { NgModule, Pipe } from '@angular/core';
import getDaysInMonth from 'date-fns/getDaysInMonth';
export class GetDaysInMonthPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getDaysInMonth(date);
    }
}
GetDaysInMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDaysInMonth' },] }
];
export class GetDaysInMonthPipeModule {
}
GetDaysInMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDaysInMonthPipe],
                exports: [GetDaysInMonthPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRheXMtaW4tbW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC1kYXlzLWluLW1vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sY0FBYyxNQUFNLHlCQUF5QixDQUFDO0FBR3JELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsU0FBUyxDQUFDLElBQXNCO1FBQzlCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTs7QUFjcEMsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBSnBDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGdldERheXNJbk1vbnRoIGZyb20gJ2RhdGUtZm5zL2dldERheXNJbk1vbnRoJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldERheXNJbk1vbnRoJyB9KVxuZXhwb3J0IGNsYXNzIEdldERheXNJbk1vbnRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0RGF5c0luTW9udGgoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR2V0RGF5c0luTW9udGhQaXBlXSxcbiAgZXhwb3J0czogW0dldERheXNJbk1vbnRoUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgR2V0RGF5c0luTW9udGhQaXBlTW9kdWxlIHt9XG4iXX0=