import { NgModule, Pipe } from '@angular/core';
import startOfMonth from 'date-fns/startOfMonth';
export class StartOfMonthPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return startOfMonth(date);
    }
}
StartOfMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfMonth' },] }
];
export class StartOfMonthPipeModule {
}
StartOfMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfMonthPipe],
                exports: [StartOfMonthPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtbW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL3N0YXJ0LW9mLW1vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBR2pELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsU0FBUyxDQUFDLElBQXNCO1FBQzlCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTs7QUFjbEMsTUFBTSxPQUFPLHNCQUFzQjs7O1lBSmxDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydE9mTW9udGgnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zU3RhcnRPZk1vbnRoJyB9KVxuZXhwb3J0IGNsYXNzIFN0YXJ0T2ZNb250aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydE9mTW9udGgoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3RhcnRPZk1vbnRoUGlwZV0sXG4gIGV4cG9ydHM6IFtTdGFydE9mTW9udGhQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFydE9mTW9udGhQaXBlTW9kdWxlIHt9XG4iXX0=