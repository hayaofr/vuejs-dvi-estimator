export function computeTechno(techno, estimation) {
    switch (techno) {
        case '0':
            return estimation * 1.5;
        case '1':
            return estimation * 1.3
        case '2':
            return estimation * 1;
        default:
            return estimation;
    }
}

export function computeConfiance(confiance, estimation) {
    switch (confiance) {
        case '0':
            return estimation * 1.5;
        case '1':
            return estimation * 1.2
        case '2':
            return estimation * 1;
        default:
            return estimation;
    }
}

export function computeMurphy(murphy, estimation) {
    switch (murphy) {
        case 'Lot 1':
            return estimation * 1.5;
        case 'Lot 2':
            return estimation * 2
        case 'Lot 3':
            return estimation * 1;
        case 'Lot 4':
            return estimation * 0.9;
        case 'Lot 5':
            return estimation * 1.8;
        case 'Lot 6':
            return estimation * 1.3;
        default:
            return estimation;
    }
}

