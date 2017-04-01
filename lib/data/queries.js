import gql from 'graphql-tag';

export const lookupBall = gql`
query ($slug:String!){
  ball: lookupBall(slug:$slug) {
		id
		user {
		  id
			name
			picture
		}
		name
		slug
		image
		video
		audio
		stats {
			amountRaised
			totalActions
			matchAmount
			totalRaised
		}
		beneficiary {
		  id
		  name
		  image
		  website
		  upstreamId
		  type
		  ein
		}
		matchers {
		  id
		  type
		  amount
		}
		actions(first:20) {
		  edges {
		    node {
		      id
		      user {
		        id 
		        name
		        picture
		      }
		      type
		      video
		    }
		  }
		}
  }
}`;

export const createPayment = gql`
mutation ($input:PaymentInput!){
  createPayment(input:$input) {
	  ok
	}
}`;

export const emailDonationLink = gql`
mutation ($location:String!, $email:String!){
  emailDonationLink(location:$location, email: $email) {
	  ok
	}
}`;
