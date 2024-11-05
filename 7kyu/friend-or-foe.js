// Friend or Foe

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}
// Input strings will only contain letters. Note: keep the original order of the names in the output.


// First solution: O(n) time, O(n) space
function friend(friends){
    return friends.filter((friend) => friend.length == 4)
  }

// Second solution: O(n) time, O(1) space
function friend(friends){

    for (i=friends.length-1;i<0;i--) {
        if (friends[i].length != 4) {
            friends.splice(i,i+1);
        }
    }
    return friends
}