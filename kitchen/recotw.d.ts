declare module RecoTw {
    module Entities {
        interface Tweet {
            id: string;
            tweet_id: string;
            content: string;
            target_id: string;
            target_sn: string;
            record_date: string;
            result?: boolean;
        }
        interface Count {
            count: any;
        }
    }
    interface Thenable<T> {
        then: (t: T) => any;
    }
    function setRequester(f: any): void;
    module Resources {
        class Tweet {
            static get_tweet_all(params: {
                since_id: string;
                callback: string;
            }): Thenable<any>;
            static user_tweet(params: {
                callback: string;
                id: string;
                sn: string;
            }): Thenable<any>;
            static count_tweet(params: {
                callback: string;
            }): Thenable<any>;
            static record_tweet(params: {
                id: string;
                via: string;
            }): Thenable<any>;
        }
        class Count {
        }
    }
}
export = RecoTw;
