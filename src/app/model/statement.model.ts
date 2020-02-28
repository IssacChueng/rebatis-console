import { ParameterMapModel } from './parameterMap.model';
import { ResultMapModel } from './resultMap.model';

export class StatementModel {
    id:string;
    xml: string;
    parameterMap: ParameterMapModel;

    resultMaps: ResultMapModel[];
}