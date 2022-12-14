import { fromArrayBuffer, fromString } from "@aws-sdk/util-buffer-from";
export const fromUtf8 = (input) => {
    const buf = fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
export const toUtf8 = (input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
