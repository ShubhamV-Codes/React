import { atom, selector} from 'recoil';

export const counterAtom = atom({
    default:0,
    key:"counterAtom"
});

export const evenSelector = selector({
    key:'eveSelector',
    get:({get})=>{
        const count = get(counterAtom);
        return count%2==0;
    }   
})