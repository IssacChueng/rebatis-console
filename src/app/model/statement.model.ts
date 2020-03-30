import { ParameterMapModel } from './parameterMap.model';
import { ResultMapModel } from './resultMap.model';

export class StatementModel {
    id:string;
    xml: string;
    updateType: number;
    parameterMap: ParameterMapModel;

    resultMaps: ResultMapModel[];
}