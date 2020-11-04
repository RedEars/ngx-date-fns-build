import { NgModule, Pipe } from '@angular/core';
import formatRelative from 'date-fns/formatRelative';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import de from 'date-fns/locale/de';
export class FormatRelativePurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, baseDate = new Date(), options) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        if (typeof baseDate === 'string') {
            baseDate = new Date(baseDate);
        }
        const formatRelativeLocale = {
            lastWeek: 'eeee',
            yesterday: "'Gestern'",
            today: "'Heute'",
            tomorrow: "'Morgen'",
            nextWeek: 'eeee',
            other: 'eeee'
        };
        const locale = Object.assign(Object.assign({}, de), { formatRelative: (token) => formatRelativeLocale[token] });
        return formatRelative(date, baseDate, { locale });
    }
}
FormatRelativePurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatRelativePure' },] }
];
FormatRelativePurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
export class FormatRelativePurePipeModule {
}
FormatRelativePurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatRelativePurePipe],
                exports: [FormatRelativePurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXJlbGF0aXZlLnB1cmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2Zvcm1hdC1yZWxhdGl2ZS5wdXJlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sY0FBYyxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFFTCwyQkFBMkIsRUFDNUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxQyxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdwQyxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQW1CLE1BQW1DO1FBQW5DLFdBQU0sR0FBTixNQUFNLENBQTZCO0lBQUcsQ0FBQztJQUUxRCxTQUFTLENBQ1AsSUFBc0IsRUFDdEIsV0FBNkIsSUFBSSxJQUFJLEVBQUUsRUFDdkMsT0FHQztRQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2hDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtRQUNELE1BQU0sb0JBQW9CLEdBQVE7WUFDaEMsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDO1FBQ0YsTUFBTSxNQUFNLG1DQUNQLEVBQUUsS0FDTCxjQUFjLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUM1RCxDQUFDO1FBQ0YsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBL0JGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRTs7O1lBTHRDLDJCQUEyQjs7QUEyQzdCLE1BQU0sT0FBTyw0QkFBNEI7OztZQUp4QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tICdkYXRlLWZucy9mb3JtYXRSZWxhdGl2ZSc7XG5pbXBvcnQge1xuICBjYWxjdWxhdGVMb2NhbGUsXG4gIERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZVxufSBmcm9tICcuL2RhdGUtZm5zLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2RlJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0Zvcm1hdFJlbGF0aXZlUHVyZScgfSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRSZWxhdGl2ZVB1cmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oXG4gICAgZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSxcbiAgICBiYXNlRGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHdlZWtTdGFydHNPbj86IG51bWJlcjtcbiAgICAgIGxvY2FsZT86IExvY2FsZTtcbiAgICB9XG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJhc2VEYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgYmFzZURhdGUgPSBuZXcgRGF0ZShiYXNlRGF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IGZvcm1hdFJlbGF0aXZlTG9jYWxlOiBhbnkgPSB7XG4gICAgICBsYXN0V2VlazogJ2VlZWUnLFxuICAgICAgeWVzdGVyZGF5OiBcIidHZXN0ZXJuJ1wiLFxuICAgICAgdG9kYXk6IFwiJ0hldXRlJ1wiLFxuICAgICAgdG9tb3Jyb3c6IFwiJ01vcmdlbidcIixcbiAgICAgIG5leHRXZWVrOiAnZWVlZScsXG4gICAgICBvdGhlcjogJ2VlZWUnXG4gICAgfTtcbiAgICBjb25zdCBsb2NhbGUgPSB7XG4gICAgICAuLi5kZSxcbiAgICAgIGZvcm1hdFJlbGF0aXZlOiAodG9rZW46IGFueSkgPT4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dXG4gICAgfTtcbiAgICByZXR1cm4gZm9ybWF0UmVsYXRpdmUoZGF0ZSwgYmFzZURhdGUsIHsgbG9jYWxlIH0pO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1hdFJlbGF0aXZlUHVyZVBpcGVdLFxuICBleHBvcnRzOiBbRm9ybWF0UmVsYXRpdmVQdXJlUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0UmVsYXRpdmVQdXJlUGlwZU1vZHVsZSB7fVxuIl19