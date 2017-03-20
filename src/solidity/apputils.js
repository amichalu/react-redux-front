export const isDebug = true;

export function mylog( ...txt ) {
    if (isDebug) console.log( ...txt );
}
export function mydir( ...obj ) {
    if (isDebug) console.dir( ...obj );
}