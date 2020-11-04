import { Pipe, ChangeDetectorRef, NgModule } from '@angular/core';
import lastDayOfWeek from 'date-fns/lastDayOfWeek';
import { DateFnsConfigurationService, calculateLocale } from './date-fns-configuration.service';
export class LastDayOfWeekPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        return lastDayOfWeek(date, calculateLocale(options, this.config));
    }
}
LastDayOfWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfWeek', pure: false },] }
];
LastDayOfWeekPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
export class LastDayOfWeekPipeModule {
}
LastDayOfWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfWeekPipe],
                exports: [LastDayOfWeekPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1kYXktb2Ytd2Vlay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvbGFzdC1kYXktb2Ytd2Vlay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxJQUFJLEVBR0osaUJBQWlCLEVBQ2pCLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUVuRCxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLGVBQWUsRUFDaEIsTUFBTSxrQ0FBa0MsQ0FBQztBQUcxQyxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLFlBQ1MsTUFBbUMsRUFDbkMsRUFBcUI7UUFEckIsV0FBTSxHQUFOLE1BQU0sQ0FBNkI7UUFDbkMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFFNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDNUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsU0FBUyxDQUNQLElBQXNCLEVBQ3RCLE9BR0M7UUFFRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7WUF6QkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7OztZQUo5QywyQkFBMkI7WUFSM0IsaUJBQWlCOztBQTRDbkIsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBSm5DLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBOZ01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUsIERhdGVGbnNXZWVrSW5kZXggfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBsYXN0RGF5T2ZXZWVrIGZyb20gJ2RhdGUtZm5zL2xhc3REYXlPZldlZWsnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBEYXRlRm5zQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gIGNhbGN1bGF0ZUxvY2FsZVxufSBmcm9tICcuL2RhdGUtZm5zLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNMYXN0RGF5T2ZXZWVrJywgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBMYXN0RGF5T2ZXZWVrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbG9jYWxlQ2hhbmdlZCQ6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlnOiBEYXRlRm5zQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLmxvY2FsZUNoYW5nZWQkID0gdGhpcy5jb25maWcubG9jYWxlQ2hhbmdlZC5zdWJzY3JpYmUoXyA9PlxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2FsZUNoYW5nZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICB0cmFuc2Zvcm0oXG4gICAgZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbG9jYWxlPzogTG9jYWxlO1xuICAgICAgd2Vla1N0YXJ0c09uPzogRGF0ZUZuc1dlZWtJbmRleDtcbiAgICB9XG4gICk6IERhdGUge1xuICAgIHJldHVybiBsYXN0RGF5T2ZXZWVrKGRhdGUsIGNhbGN1bGF0ZUxvY2FsZShvcHRpb25zLCB0aGlzLmNvbmZpZykpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xhc3REYXlPZldlZWtQaXBlXSxcbiAgZXhwb3J0czogW0xhc3REYXlPZldlZWtQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBMYXN0RGF5T2ZXZWVrUGlwZU1vZHVsZSB7fVxuIl19