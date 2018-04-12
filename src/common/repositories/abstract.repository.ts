export abstract class AbstractServiceRepository {

    /**
     * @param payload
     */
    private checkDefined(payload): boolean {
        if (typeof payload === 'undefined') {
            throw new Error('undefined');
        } else {
            return false;
        }
    }
}