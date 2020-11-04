import { NgModule, Pipe } from '@angular/core';
import startOfWeek from 'date-fns/startOfWeek';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
export class StartOfWeekPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return startOfWeek(date, calculateLocale(options, this.config));
    }
}
StartOfWeekPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfWeekPure' },] }
];
StartOfWeekPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
export class StartOfWeekPurePipeModule {
}
StartOfWeekPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfWeekPurePipe],
                exports: [StartOfWeekPurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2Ytd2Vlay5wdXJlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdGFydC1vZi13ZWVrLnB1cmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZiwyQkFBMkIsRUFDNUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUkxQyxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQW1CLE1BQW1DO1FBQW5DLFdBQU0sR0FBTixNQUFNLENBQTZCO0lBQUcsQ0FBQztJQUUxRCxTQUFTLENBQ1AsSUFBc0IsRUFDdEIsT0FHQztRQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OztZQWZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTs7O1lBSm5DLDJCQUEyQjs7QUEwQjdCLE1BQU0sT0FBTyx5QkFBeUI7OztZQUpyQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydE9mV2Vlayc7XG5pbXBvcnQge1xuICBjYWxjdWxhdGVMb2NhbGUsXG4gIERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZVxufSBmcm9tICcuL2RhdGUtZm5zLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlLCBEYXRlRm5zV2Vla0luZGV4IH0gZnJvbSAnLi90eXBlcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdGFydE9mV2Vla1B1cmUnIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZldlZWtQdXJlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBEYXRlRm5zQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGRhdGU6IERhdGVGbnNJbnB1dERhdGUsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGxvY2FsZT86IExvY2FsZTtcbiAgICAgIHdlZWtTdGFydHNPbj86IERhdGVGbnNXZWVrSW5kZXg7XG4gICAgfVxuICApOiBEYXRlIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCBjYWxjdWxhdGVMb2NhbGUob3B0aW9ucywgdGhpcy5jb25maWcpKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdGFydE9mV2Vla1B1cmVQaXBlXSxcbiAgZXhwb3J0czogW1N0YXJ0T2ZXZWVrUHVyZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJ0T2ZXZWVrUHVyZVBpcGVNb2R1bGUge31cbiJdfQ==