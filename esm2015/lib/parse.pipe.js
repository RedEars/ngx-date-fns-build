import { Pipe, ChangeDetectorRef, NgModule } from '@angular/core';
import { DateFnsConfigurationService, calculateLocale } from './date-fns-configuration.service';
import parse from 'date-fns/parse';
export class ParsePipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(dateString, formatString, backupDate, options) {
        return parse(dateString, formatString, backupDate, calculateLocale(options, this.config));
    }
}
ParsePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsParse', pure: false },] }
];
ParsePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
export class ParsePipeModule {
}
ParsePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ParsePipe],
                exports: [ParsePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL3BhcnNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLElBQUksRUFFSixpQkFBaUIsRUFFakIsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsZUFBZSxFQUNoQixNQUFNLGtDQUFrQyxDQUFDO0FBSTFDLE9BQU8sS0FBSyxNQUFNLGdCQUFnQixDQUFDO0FBR25DLE1BQU0sT0FBTyxTQUFTO0lBR3BCLFlBQ1MsTUFBbUMsRUFDbkMsRUFBcUI7UUFEckIsV0FBTSxHQUFOLE1BQU0sQ0FBNkI7UUFDbkMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFFNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDNUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsU0FBUyxDQUNQLFVBQWtCLEVBQ2xCLFlBQW9CLEVBQ3BCLFVBQWUsRUFDZixPQU1DO1FBRUQsT0FBTyxLQUFLLENBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ3RDLENBQUM7SUFDSixDQUFDOzs7WUFuQ0YsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7WUFSdEMsMkJBQTJCO1lBTDNCLGlCQUFpQjs7QUF1RG5CLE1BQU0sT0FBTyxlQUFlOzs7WUFKM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDekIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUGlwZSxcbiAgUGlwZVRyYW5zZm9ybSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveSxcbiAgTmdNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEYXRlRm5zQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gIGNhbGN1bGF0ZUxvY2FsZVxufSBmcm9tICcuL2RhdGUtZm5zLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNQYXJzZScsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgUGFyc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBsb2NhbGVDaGFuZ2VkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWc6IERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMubG9jYWxlQ2hhbmdlZCQgPSB0aGlzLmNvbmZpZy5sb2NhbGVDaGFuZ2VkLnN1YnNjcmliZShfID0+XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9jYWxlQ2hhbmdlZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShcbiAgICBkYXRlU3RyaW5nOiBzdHJpbmcsXG4gICAgZm9ybWF0U3RyaW5nOiBzdHJpbmcsXG4gICAgYmFja3VwRGF0ZTogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBsb2NhbGU/OiBMb2NhbGU7XG4gICAgICB3ZWVrU3RhcnRzT24/OiAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuICAgICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlPzogbnVtYmVyO1xuICAgICAgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPzogYm9vbGVhbjtcbiAgICAgIHVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM/OiBib29sZWFuO1xuICAgIH1cbiAgKTogRGF0ZSB7XG4gICAgcmV0dXJuIHBhcnNlKFxuICAgICAgZGF0ZVN0cmluZyxcbiAgICAgIGZvcm1hdFN0cmluZyxcbiAgICAgIGJhY2t1cERhdGUsXG4gICAgICBjYWxjdWxhdGVMb2NhbGUob3B0aW9ucywgdGhpcy5jb25maWcpXG4gICAgKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtQYXJzZVBpcGVdLFxuICBleHBvcnRzOiBbUGFyc2VQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJzZVBpcGVNb2R1bGUge31cbiJdfQ==