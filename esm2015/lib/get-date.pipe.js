import { NgModule, Pipe } from '@angular/core';
import getDate from 'date-fns/getDate';
export class GetDatePipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getDate(date);
    }
}
GetDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDate' },] }
];
export class GetDatePipeModule {
}
GetDatePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDatePipe],
                exports: [GetDatePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxJQUFTO1FBQ2pCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OztZQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7O0FBYzdCLE1BQU0sT0FBTyxpQkFBaUI7OztZQUo3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGdldERhdGUgZnJvbSAnZGF0ZS1mbnMvZ2V0RGF0ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXREYXRlJyB9KVxuZXhwb3J0IGNsYXNzIEdldERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBhbnkpOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldERhdGUoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR2V0RGF0ZVBpcGVdLFxuICBleHBvcnRzOiBbR2V0RGF0ZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldERhdGVQaXBlTW9kdWxlIHt9XG4iXX0=