export default class User {

    constructor(props) {
        for (const [key, value] of Object.entries(props)) {
                 //console.log(`${key}: ${value}`);
                  this[key] = value
           }
     }

    /*
    constructor(id,
                name,
                email,
                email_verified_at,
                password,
                two_factor_secret, 
                two_factor_recovery_codes,
                remember_token,
                current_team_id, 
                profile_photo_path, 
                location, 
                url,
                description, 
                followers_count,
                friends_count,
                statuses_count, 
                time_zone, 
                created_at,
                updated_at){
                    this.id = id
                    this.name = name
                    this.email = email
                    this.email_verified_at = email_verified_at            
                    this.password = password
                    this.two_factor_secret = two_factor_secret
                    this.two_factor_recovery_codes = two_factor_recovery_codes
                    this.remember_token = remember_token
                    this.current_team_id = current_team_id
                    this.profile_photo_path = profile_photo_path
                    this.location = location
                    this.url = url
                    this.description = description
                    this.followers_count = followers_count
                    this.friends_count = friends_count
                    this.statuses_count = statuses_count
                    this.time_zone = time_zone
                    this.created_at = created_at
                    this.updated_at = updated_at
                 }
                 */



}

