module RecoTw {
  export module Entities {

    export interface Tweet {
      id: string;
      tweet_id: string;
      content: string;
      target_id: string;
      target_sn: string;
      record_date: string;
      result?: boolean;
    }

    export interface Count {
      count: any;
    }

  }

  export interface Thenable<T> {
    then: (t: T) => any;
  }

  var request: <T>(method: string, href: string, params: Object) => Thenable<T>;

  export function setRequester(f) {
    request = f;
  }

  export module Resources {

    export class Tweet {

      public static get_tweet_all(
        params: { since_id: string; callback: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/1/tweet/get_tweet_all' ,
          params
        );
      }

      public static user_tweet(
        params: { callback: string; id: string; sn: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/1/tweet/user_tweet' ,
          params
        );
      }

      public static count_tweet(
        params: { callback: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/1/tweet/count_tweet' ,
          params
        );
      }

      public static record_tweet(
        params: { id: string; via: string;  }
      ): Thenable<any> {
        return request(
          'POST',
           '/1/tweet/record_tweet' ,
          params
        );
      }
    }

    export class Count {
    }

  }

  }
export = RecoTw; 
