import { NgModule, Pipe } from '@angular/core';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';
export class LastDayOfMonthPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return lastDayOfMonth(date);
    }
}
LastDayOfMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfMonth' },] }
];
export class LastDayOfMonthPipeModule {
}
LastDayOfMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfMonthPipe],
                exports: [LastDayOfMonthPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1kYXktb2YtbW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2xhc3QtZGF5LW9mLW1vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sY0FBYyxNQUFNLHlCQUF5QixDQUFDO0FBR3JELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsU0FBUyxDQUFDLElBQXNCO1FBQzlCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTs7QUFjcEMsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBSnBDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGxhc3REYXlPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2xhc3REYXlPZk1vbnRoJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0xhc3REYXlPZk1vbnRoJyB9KVxuZXhwb3J0IGNsYXNzIExhc3REYXlPZk1vbnRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IERhdGUge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhc3REYXlPZk1vbnRoKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xhc3REYXlPZk1vbnRoUGlwZV0sXG4gIGV4cG9ydHM6IFtMYXN0RGF5T2ZNb250aFBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIExhc3REYXlPZk1vbnRoUGlwZU1vZHVsZSB7fVxuIl19