=== Corner Ad ===
Contributors: codepeople
Donate link: http://wordpress.dwbooster.com/content-tools/corner-ad
Tags: 
Requires at least: 3.0.5
Tested up to: 3.5.1
Stable tag: 1.0.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Corner Ad is a minimally invasive advertising display that uses any of your webpage's top corners - a position typically under-utilized by developers - and attracts users' attention by a cool visual effect imitating a page flip.

== Description ==

**Corner Ad** is a minimally invasive advertising display that uses any of your webpage's top corners - a position typically under-utilized by developers - and attracts users' attention by a cool visual effect imitating a page flip. **Corner Ad** initially displays a partial ad, which attracts attention; when user hover the mouse over it, the ad opens to its full size while imitating a page-flip effect; once the mouse is moved away, the ad returns to its initial size.

**Corner Ad** can also be used for announcements, newsflashes, and basically for anything else that you consider important and want your website visitors to see. It is common nowadays that visitors quickly scan the contents of a page and often fail to notice messages that you would like them to see; **Corner Ad** attempts to resolve this issue.

**Features:**

* Minimally invasive.
* Allows the selection of which top corner area of the page (right or left) will be used to display the ad to avoid overwriting important elements like logos, menus or search features.
* The target of the link can be selected, so it can open the new page in the same browser's window or into a new window.
* Configurable background color for the ad to match the web page design.
* Automatic mirror effect.
* Configurable time for automatic open and close actions.
* Supports multiple ads into the same website (each ad in a different page)
* Count the number of click for Ads.
* The corner ad effect is made using Flash.

Requirements: The browser must support Flash.

If you want more information about this plugin or another one don't doubt to visit my website:

[http://wordpress.dwbooster.com](http://wordpress.dwbooster.com "CodePeople WordPress Repository")

== Installation ==

**To install Corner Ad, follow these steps:**

1. Download the plugin (zip file).
2. Go to the WordPress Plugins menu in the dashboard area.
3. Press the "Add New" button.
4. Click the "Upload" link and select the downloaded plugin.
6. Once installed click "Activate" to enable it.

== Interface ==

**Creating an Ad**

To create an ad go to the settings page under the menu "Settings > Corner Ad" or the link "settings" into the plugins area. The first screen will display the list of ads already created and a button "Create New Ad" for adding new ads.

* To create a new ad, use the "Create New Ad" button.
* To edit an existent ad, use the "Edit" button related to the ad.
* To delete an ad, use the "Remove" button related to the ad.

The edition screen allows the configuration of the ad featuring the following options:

* Ad name: Name used to identify the ad in the list.
* Ad Link: Link to a page that will be opened when the user clicks on the ad.
* Open Ad in: The options are "New page" to open the page in a new browser window or "Self Page" to keep the navigation in the same browser window.
* Ad image: Address (URL) of the image that will be used for the ad. If you click the "Browse" button the WordPress media library will be opened to select one of the images already available in your WordPress website and you can also add new images there. It is possible to associate multiple images to the same Ad, the images will be randomly selected to display in page.
* Set as mirror: Automatically enable the image mirror on the ad.
* Use corner with color:  Applies a color to the ad cover.
* Display Ad in corner:  For selecting which top corner (Left or Right) will be used to display the ad.
* Open corner in: Time in seconds to automatically open the ad.
* Close corner in: Time in seconds to automatically closet the ad.

**Inserting the Ad**

To inset the ad into a post or page open the post/page for editing and use the "Corner Ad" icon that is located above the editor.

A floating panel will appear allowing the selection of the corner ad to be inserted into the post/page. Once selected a shortcode with the ad's ID will be inserted into the content., for example: [corner-ad id=3] (the 3 is the ID of the ad in this sample).

To insert an ad directly into the website theme to display it across all the pages or into specific sections, edit the template and insert the following code fragment:

<?php echo do_shortcode('[corner-ad id=3]'); ?>

To identify the ID that belongs to each ad, go to the page in the settings area where the ads are created. On that list each ad has its shortcode with its ID.

== Frequently Asked Questions ==

= Q: Why the image does not cover the entire corner? =

A: The Corner Ad has square form, so it is recommended to use proportional images.

= Q: Is the Corner Ad available for mobiles? =

A: The Corner Ad uses flash technologies, so it will be loaded only by mobiles with support for flash applications, however even if a mobile doesn't supports flash, "Corner Ad" won't cause errors on the page.

== Screenshots ==
1. Corner Ad Preview
2. Plugin Installation
3. Plugin Settings
4. Create a New Ad
5. Setting Page with the List of Ads
6. Isertion Icon
7. Corner Ad Insertion Interface
8. Sales Reports
9. Shortcode of Corner Ad with the Corresponding ID