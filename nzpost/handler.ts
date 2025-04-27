import type { APIGatewayProxyHandler } from 'aws-lambda';

class NZPostAPI {
    private headers: Headers;
    private baseUrl: string;
  
    constructor(
      private clientId: string,
      private authToken: string,
      private userName: string
    ) {
      this.baseUrl = 'https://api.nzpost.co.nz/addresschecker/1.0';
      this.headers = new Headers();
      this.setHeaders();
    }
  
    private setHeaders() {
      this.headers.append('client_id', this.clientId);
      this.headers.append('Authorization', `Bearer ${this.authToken}`);
      this.headers.append('Accept', 'application/json');
      this.headers.append('user_name', this.userName);
    }
  
    public async suggestPartial(query: string) {
      const url = `${this.baseUrl}/suggest_partial?q=${encodeURIComponent(query)}`;
      const init: RequestInit = {
        method: 'GET',
        headers: this.headers
      };
  
      const response = await fetch(url, init);
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('json')) {
        return await response.json();
      } else {
        return await response.text();
      }
    }
  }
  
export const handler: APIGatewayProxyHandler = async (event) => {
    const query = event.queryStringParameters?.q || 'willis';
  
    const api = new NZPostAPI(
      '89aa47b00c2f49bf807fc23624a1ddb2',
      'eyJhbGciOiJIUzI1NiIsImtpZCI6IlRFU1QiLCJwaS5hdG0iOiIxIn0.eyJzY29wZSI6W10sImF1dGhvcml6YXRpb25fZGV0YWlscyI6W10sImNsaWVudF9pZCI6Ijg5YWE0N2IwMGMyZjQ5YmY4MDdmYzIzNjI0YTFkZGIyIiwiZXhwIjoxNzQ1ODIxNzk1fQ.xNoD9b3t7DwPIPXYjb52EDvzCPAnJPe6eoIKTsDQMP0',
      'it@wallopay.com'
    );
  
    try {
      const result = await api.suggestPartial(query);
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Something went wrong', detail: err })
      };
    }
  };