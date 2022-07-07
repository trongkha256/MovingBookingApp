// Override lại default types/interfaces của library
import "axios";

declare module "axios" {
    export interface AxiosResponse<T = any> extends Promise<T> { }
}
