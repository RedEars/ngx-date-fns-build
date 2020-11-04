import { NgModule, Pipe } from '@angular/core';
import differenceInMinutes from 'date-fns/differenceInMinutes';
export class DifferenceInMinutesPipe {
    transform(dateLeft, dateRight) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return differenceInMinutes(dateLeft, dateRight);
    }
}
DifferenceInMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInMinutes' },] }
];
export class DifferenceInMinutesPipeModule {
}
DifferenceInMinutesPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInMinutesPipe],
                exports: [DifferenceInMinutesPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1taW51dGVzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9kaWZmZXJlbmNlLWluLW1pbnV0ZXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxtQkFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUcvRCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFNBQVMsQ0FBQyxRQUEwQixFQUFFLFNBQTJCO1FBQy9ELElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2hDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ2pDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sbUJBQW1CLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRTs7QUFpQnpDLE1BQU0sT0FBTyw2QkFBNkI7OztZQUp6QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBkaWZmZXJlbmNlSW5NaW51dGVzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1pbnV0ZXMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zRGlmZmVyZW5jZUluTWludXRlcycgfSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSW5NaW51dGVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZUxlZnQ6IERhdGVGbnNJbnB1dERhdGUsIGRhdGVSaWdodDogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBkYXRlTGVmdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVMZWZ0ID0gbmV3IERhdGUoZGF0ZUxlZnQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGVSaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVSaWdodCA9IG5ldyBEYXRlKGRhdGVSaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBkaWZmZXJlbmNlSW5NaW51dGVzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RpZmZlcmVuY2VJbk1pbnV0ZXNQaXBlXSxcbiAgZXhwb3J0czogW0RpZmZlcmVuY2VJbk1pbnV0ZXNQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSW5NaW51dGVzUGlwZU1vZHVsZSB7fVxuIl19