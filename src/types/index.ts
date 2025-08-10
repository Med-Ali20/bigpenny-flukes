type Image = {
    data: {
        id?: number;
        attributes: {
            name: string;
            url: string;
        }
    }
}

export type DraggableCard = {
    title: string;
    link: string;
    image: Image
}

export type BookingInfo = {
    Title: string;
    Message: string;
    SignOff: string;
}

export type ContentPane = {
    title: string;
    image: Image;
    mobileImage: Image;
    content: string;
    cta: {
        text: string;
        url: string;
    }
}

export type DraggableCards = {
    cards: DraggableCard[];
}

export type QA = {
    Question: string;
    Answer: string;
}

export type FAQ = {
    title: string;
    QA: QA[]
}

export type Gallery = {
    Title: string;
    Images: {
        data: {
            id?: number;
            attributes: {
                name: string;
                url: string;
            }
        }[]
    }
}

export type GradientImage = {
    Title: string;
    Description: string;
    Image: Image;
}

export type HeroImage = {
    Image: Image;
    MobileImage: Image;
    Hyperlink: string;
}

export type TextImageBlock = {
    Title: string;
    Content: string;
    CTA: {
        Text: string;
        Url: string;
    },
    RoundImage: {
        Image: Image;
        Url: string;
        Heading: string;
        SubHeading: string;
    }[]
}

export type Testimonial = {
    backgroundColor: string;
    textColor: string;
    arrowsColor: string;
    testimonials: {
        Name: string;
        Business: string;
        Quote: string;
    }[]
}

export type BookingWidget = {
    Title: string;
    Content: string;
    DesignMyNightID: string;
    HTML?: string;
}

export type Slide = {
    Image: Image;
    Title: string;
    Content: string;
    CTA: {
        Text: string;
        Url: string
    }
}

export type ContentSlider = {
    Title: string;
    Slide: Slide[];
}

export type DMN_Widget = {
    DMN_HTML: string;
}

export type FormEmbed = {
    EmbedCode: string;
}

export type Event = {
    Title: string;
    Image: Image;
    Url: string;
}

export type Grid = {
    Title: string;
    Event: Event[]
}

export type Tab = {
    Tab: string;
}



export type MenuItem = {
    Name: string;
    Description: string;
    Price: string;
    Image: Image
}

export type MenuSection = {
    Tab: string;
    Section: string;
    SectionOrder: number;
    MenuItem: MenuItem[]
}

export type MenuTabs = {
    Tabs: Tab[];
    Menus: MenuSection[]
}

export type AirshipPayload = {
    DAY: string;
    MONTH: string;
    YEAR: string;
    EMAIL: string;
    FORENAME: string;
    SURNAME: string;
};

export type MondayPayload = {
    date: string; // Expected format: YYYY-MM-DD
    name: string;
    email: string;
    timeOfDay: string;
    type: string;
    numPeople: string;
    fb: string;
    company: string;
    phone: string;
    notes: string;
}

export type FanzoEvent = {
    startTimeLocal: string;
    [key: string]: any; 
  }
  
  export type FanzoItem = {
    displayTime: string;
    dateGroup: string;
    [key: string]: any;
  }
  
  export type GroupedItem = {
    date: string;
    displayDate: string;
    events: FanzoItem[];
  }