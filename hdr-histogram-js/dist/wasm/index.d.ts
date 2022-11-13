import Histogram, { HistogramSummary } from "../Histogram";
import { BuildRequest } from "../HistogramBuilder";
export declare const webAssemblyAvailable: boolean;
export declare const initWebAssembly: () => Promise<void>;
export declare const initWebAssemblySync: () => void;
export declare const webAssemblyReady: () => boolean;
export declare class WasmHistogram implements Histogram {
    private _wasmHistogram;
    private _remoteHistogramClass;
    tag: string;
    constructor(_wasmHistogram: any, _remoteHistogramClass: string);
    static build(request?: BuildRequest): WasmHistogram;
    static decode(data: Uint8Array, bitBucketSize?: 8 | 16 | 32 | 64 | "packed", minBarForHighestTrackableValue?: number): Histogram;
    get numberOfSignificantValueDigits(): number;
    get autoResize(): boolean;
    set autoResize(resize: boolean);
    get highestTrackableValue(): number;
    set highestTrackableValue(value: number);
    get startTimeStampMsec(): number;
    set startTimeStampMsec(value: number);
    get endTimeStampMsec(): number;
    set endTimeStampMsec(value: number);
    get totalCount(): number;
    get stdDeviation(): number;
    get mean(): number;
    get estimatedFootprintInBytes(): number;
    get minNonZeroValue(): number;
    get maxValue(): number;
    recordValue(value: number): void;
    recordValueWithCount(value: number, count: number): void;
    recordValueWithExpectedInterval(value: number, expectedIntervalBetweenValueSamples: number): void;
    getValueAtPercentile(percentile: number): number;
    outputPercentileDistribution(percentileTicksPerHalfDistance?: number, outputValueUnitScalingRatio?: number, useCsvFormat?: boolean): string;
    private isDestroyed;
    get summary(): HistogramSummary;
    toJSON(): HistogramSummary;
    toString(): string;
    inspect(): string;
    addWhileCorrectingForCoordinatedOmission(otherHistogram: WasmHistogram, expectedIntervalBetweenValueSamples: number): void;
    copyCorrectedForCoordinatedOmission(expectedIntervalBetweenValueSamples: number): WasmHistogram;
    add(otherHistogram: WasmHistogram): void;
    subtract(otherHistogram: WasmHistogram): void;
    encode(): Uint8Array;
    reset(): void;
    destroy(): void;
}