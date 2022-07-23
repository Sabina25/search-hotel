export type Photo = {
    url: string;
};

export type Sale = {
    id: string;
    editorial: { destinationName: string; title: string };
    photos: Photo[];
};

export type SaleType = {
    title: string;
    destination: string;
    photo: {
        url: string;
    };
    details: string;
    price: string;
};
