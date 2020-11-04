import { Pipe, ChangeDetectorRef, NgModule } from '@angular/core';
import getWeek from 'date-fns/getWeek';
import { DateFnsConfigurationService, calculateLocale } from './date-fns-configuration.service';
export class GetWeekPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getWeek(date, calculateLocale(options, this.config));
    }
}
GetWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeek', pure: false },] }
];
GetWeekPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
export class GetWeekPipeModule {
}
GetWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeekPipe],
                exports: [GetWeekPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXdlZWsucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC13ZWVrLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLElBQUksRUFHSixpQkFBaUIsRUFDakIsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBRXZDLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsZUFBZSxFQUNoQixNQUFNLGtDQUFrQyxDQUFDO0FBRzFDLE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQ1MsTUFBbUMsRUFDbkMsRUFBcUI7UUFEckIsV0FBTSxHQUFOLE1BQU0sQ0FBNkI7UUFDbkMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFFNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDNUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsU0FBUyxDQUNQLElBQXNCLEVBQ3RCLE9BSUM7UUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUE3QkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7WUFKeEMsMkJBQTJCO1lBWjNCLGlCQUFpQjs7QUFvRG5CLE1BQU0sT0FBTyxpQkFBaUI7OztZQUo3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBOZ01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERhdGVGbnNJbnB1dERhdGUsXG4gIERhdGVGbnNXZWVrSW5kZXgsXG4gIERhdGVGbnNGaXJzdFdlZWtEYXlzXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGdldFdlZWsgZnJvbSAnZGF0ZS1mbnMvZ2V0V2Vlayc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgY2FsY3VsYXRlTG9jYWxlXG59IGZyb20gJy4vZGF0ZS1mbnMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldFdlZWsnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEdldFdlZWtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBsb2NhbGVDaGFuZ2VkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWc6IERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMubG9jYWxlQ2hhbmdlZCQgPSB0aGlzLmNvbmZpZy5sb2NhbGVDaGFuZ2VkLnN1YnNjcmliZShfID0+XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9jYWxlQ2hhbmdlZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShcbiAgICBkYXRlOiBEYXRlRm5zSW5wdXREYXRlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBsb2NhbGU/OiBMb2NhbGU7XG4gICAgICB3ZWVrU3RhcnRzT24/OiBEYXRlRm5zV2Vla0luZGV4O1xuICAgICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlPzogRGF0ZUZuc0ZpcnN0V2Vla0RheXM7XG4gICAgfVxuICApOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFdlZWsoZGF0ZSwgY2FsY3VsYXRlTG9jYWxlKG9wdGlvbnMsIHRoaXMuY29uZmlnKSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR2V0V2Vla1BpcGVdLFxuICBleHBvcnRzOiBbR2V0V2Vla1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldFdlZWtQaXBlTW9kdWxlIHt9XG4iXX0=