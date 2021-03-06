import { NgModule, Pipe } from '@angular/core';
import startOfWeekYear from 'date-fns/startOfWeekYear';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
export class StartOfWeekYearPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return startOfWeekYear(date, calculateLocale(options, this.config));
    }
}
StartOfWeekYearPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfWeekYearPure' },] }
];
StartOfWeekYearPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
export class StartOfWeekYearPurePipeModule {
}
StartOfWeekYearPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfWeekYearPurePipe],
                exports: [StartOfWeekYearPurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2Ytd2Vlay15ZWFyLnB1cmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL3N0YXJ0LW9mLXdlZWsteWVhci5wdXJlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sZUFBZSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxlQUFlLEVBQ2YsMkJBQTJCLEVBQzVCLE1BQU0sa0NBQWtDLENBQUM7QUFRMUMsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFtQixNQUFtQztRQUFuQyxXQUFNLEdBQU4sTUFBTSxDQUE2QjtJQUFHLENBQUM7SUFFMUQsU0FBUyxDQUNQLElBQXNCLEVBQ3RCLE9BSUM7UUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFoQkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFOzs7WUFSdkMsMkJBQTJCOztBQStCN0IsTUFBTSxPQUFPLDZCQUE2Qjs7O1lBSnpDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHN0YXJ0T2ZXZWVrWWVhciBmcm9tICdkYXRlLWZucy9zdGFydE9mV2Vla1llYXInO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlTG9jYWxlLFxuICBEYXRlRm5zQ29uZmlndXJhdGlvblNlcnZpY2Vcbn0gZnJvbSAnLi9kYXRlLWZucy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgRGF0ZUZuc0ZpcnN0V2Vla0RheXMsXG4gIERhdGVGbnNJbnB1dERhdGUsXG4gIERhdGVGbnNXZWVrSW5kZXhcbn0gZnJvbSAnLi90eXBlcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdGFydE9mV2Vla1llYXJQdXJlJyB9KVxuZXhwb3J0IGNsYXNzIFN0YXJ0T2ZXZWVrWWVhclB1cmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oXG4gICAgZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbG9jYWxlPzogTG9jYWxlO1xuICAgICAgd2Vla1N0YXJ0c09uPzogRGF0ZUZuc1dlZWtJbmRleDtcbiAgICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZT86IERhdGVGbnNGaXJzdFdlZWtEYXlzO1xuICAgIH1cbiAgKTogRGF0ZSB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnRPZldlZWtZZWFyKGRhdGUsIGNhbGN1bGF0ZUxvY2FsZShvcHRpb25zLCB0aGlzLmNvbmZpZykpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N0YXJ0T2ZXZWVrWWVhclB1cmVQaXBlXSxcbiAgZXhwb3J0czogW1N0YXJ0T2ZXZWVrWWVhclB1cmVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFydE9mV2Vla1llYXJQdXJlUGlwZU1vZHVsZSB7fVxuIl19