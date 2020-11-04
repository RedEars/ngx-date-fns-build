import { NgModule, Pipe } from '@angular/core';
import isTomorrow from 'date-fns/isTomorrow';
export class IsTomorrowPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return isTomorrow(date);
    }
}
IsTomorrowPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsTomorrow' },] }
];
export class IsTomorrowPipeModule {
}
IsTomorrowPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsTomorrowPipe],
                exports: [IsTomorrowPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtdG9tb3Jyb3cucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2lzLXRvbW9ycm93LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRzdDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O0FBY2hDLE1BQU0sT0FBTyxvQkFBb0I7OztZQUpoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGlzVG9tb3Jyb3cgZnJvbSAnZGF0ZS1mbnMvaXNUb21vcnJvdyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNJc1RvbW9ycm93JyB9KVxuZXhwb3J0IGNsYXNzIElzVG9tb3Jyb3dQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gaXNUb21vcnJvdyhkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJc1RvbW9ycm93UGlwZV0sXG4gIGV4cG9ydHM6IFtJc1RvbW9ycm93UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgSXNUb21vcnJvd1BpcGVNb2R1bGUge31cbiJdfQ==