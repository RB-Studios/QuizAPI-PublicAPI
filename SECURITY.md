# Security Policy
This policy states how we take on the security of our platform and how we process issues.

## Supported Versions

These verserions of the API are supported by the team. Issues with bugreports, enhancements or other inquiries about unsupported versions will be ignored.

| Version | Supported          | In Development |
| ------- | ------------------ | -------------- |
| v1.x    | ✅ | ❌ |
| v2.x    | ❌                | ✅ |

## Reporting a Vulnerability

Reporting security vulnerabilities can be done in 3 ways:

1. Vulnerabilities of high importance can be reported via mail. This mail can be sent to info@rbstudios.nl. This is **only** for vulnerabilities with **high security risks**. Any abuse may lead to a ban from the platform or other restrictions.
2. Vulnerabilities that do not need immediate response but need to be fixed in a timely manner can be reported in GitHub in the issues section with the *Medium Priority* label. Or they can be send in the Issue Section of the QuizAPI Discord.
3. Vulnerabilities that may not directly affect the way the API is being used and do not cause a security risk for us or the users may be posted in the Github Issues Section with the *Low Priority* label.

## How We Process Data

We do our best to keep the use of the platform open to everyone as much as possible. However, we do ask for some features to create an account. This can apply to both paid and free features. The data we collect and process is discussed here per category of user:

#### Unregistered Users
Unregistered users can use the API for free without creating an account or providing us with personal information. On the other hand, we only register the IP of the source for the purpose of checking the requests. It is stored for a maximum of 1 day and the IPs are updated at 00.00 UTC+1. The IP is used to record and track the number of requests from a resource. This is to prevent excessive use of the API.

Nothing else is kept on the platform.

#### Registered Users (Free)

Users with an account on the platform have certain features that unregistered users do not have. For example, they can keep a history of their requests and they have access to more requests over a certain period of time. However, the offer of the extra features may deviate from this policy. For this we would like to refer you to the website where the most up-to-date information is provided.

Of our registered users, we only register the use of the personal API Key. Unless the user activates special features himself, we do not register anything else. If the user does this, we can also store IP, time data, MAC addresses and optional fields. This is only if the user gives permission for this and turns it on.

When the user creates an account, we only ask for an email. The email is only used for the verification process and unless consent is given it will not be used for any other purpose.

#### Registered Users (Paid)

We only collect data from our paid users that we need to be able to offer the plan that the users purchase from us. This means that we only track the use of the API Key and Secret Key. As with the free registered users, we only register data that the user wants us to register.

The users who register a paid account are prompted for an email for the registration process. But you will also be asked for payment details and billing information. We share the payment details with a third party that takes care of the payments for us. The billing information is required by laws of the country where we are located. All this data is stored encrypted and is deleted when not needed.
