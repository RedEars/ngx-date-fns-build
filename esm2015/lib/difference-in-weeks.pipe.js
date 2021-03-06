import { NgModule, Pipe } from '@angular/core';
import differenceInWeeks from 'date-fns/differenceInWeeks';
export class DifferenceInWeeksPipe {
    transform(dateLeft, dateRight) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return differenceInWeeks(dateLeft, dateRight);
    }
}
DifferenceInWeeksPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInWeeks' },] }
];
export class DifferenceInWeeksPipeModule {
}
DifferenceInWeeksPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInWeeksPipe],
                exports: [DifferenceInWeeksPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi13ZWVrcy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZGlmZmVyZW5jZS1pbi13ZWVrcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBRzNELE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsU0FBUyxDQUFDLFFBQTBCLEVBQUUsU0FBMkI7UUFDL0QsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDaEMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDakMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFOztBQWlCdkMsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSnZDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbldlZWtzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbldlZWtzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0RpZmZlcmVuY2VJbldlZWtzJyB9KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VJbldlZWtzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZUxlZnQ6IERhdGVGbnNJbnB1dERhdGUsIGRhdGVSaWdodDogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBkYXRlTGVmdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVMZWZ0ID0gbmV3IERhdGUoZGF0ZUxlZnQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGVSaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVSaWdodCA9IG5ldyBEYXRlKGRhdGVSaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBkaWZmZXJlbmNlSW5XZWVrcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEaWZmZXJlbmNlSW5XZWVrc1BpcGVdLFxuICBleHBvcnRzOiBbRGlmZmVyZW5jZUluV2Vla3NQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSW5XZWVrc1BpcGVNb2R1bGUge31cbiJdfQ==