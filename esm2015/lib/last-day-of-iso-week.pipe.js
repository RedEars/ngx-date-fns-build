import { NgModule, Pipe } from '@angular/core';
import lastDayOfISOWeek from 'date-fns/lastDayOfISOWeek';
export class LastDayOfISOWeekPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return lastDayOfISOWeek(date);
    }
}
LastDayOfISOWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfISOWeek' },] }
];
export class LastDayOfISOWeekPipeModule {
}
LastDayOfISOWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfISOWeekPipe],
                exports: [LastDayOfISOWeekPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1kYXktb2YtaXNvLXdlZWsucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2xhc3QtZGF5LW9mLWlzby13ZWVrLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sZ0JBQWdCLE1BQU0sMkJBQTJCLENBQUM7QUFHekQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7O0FBY3RDLE1BQU0sT0FBTywwQkFBMEI7OztZQUp0QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBsYXN0RGF5T2ZJU09XZWVrIGZyb20gJ2RhdGUtZm5zL2xhc3REYXlPZklTT1dlZWsnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zTGFzdERheU9mSVNPV2VlaycgfSlcbmV4cG9ydCBjbGFzcyBMYXN0RGF5T2ZJU09XZWVrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IERhdGUge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhc3REYXlPZklTT1dlZWsoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTGFzdERheU9mSVNPV2Vla1BpcGVdLFxuICBleHBvcnRzOiBbTGFzdERheU9mSVNPV2Vla1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIExhc3REYXlPZklTT1dlZWtQaXBlTW9kdWxlIHt9XG4iXX0=