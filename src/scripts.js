// Room Management
// Modal for editing room
let editModal = document.createElement('div');
editModal.id = 'editRoomModal';
editModal.style.display = 'none';
editModal.style.position = 'fixed';
editModal.style.top = '0';
editModal.style.left = '0';
editModal.style.width = '100vw';
editModal.style.height = '100vh';
editModal.style.background = 'rgba(0,0,0,0.5)';
editModal.style.zIndex = '9999';
editModal.innerHTML = `<div id="editRoomModalContent" style="background:#fff;padding:20px 24px;border-radius:8px;max-width:1000px;margin:30px auto;position:relative;box-shadow:0 4px 16px rgba(0,0,0,0.15);font-family:Arial,sans-serif;">
  <h3 style="margin:0 0 16px 0;color:#333;text-align:center;font-size:18px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">Edit Room Booking</h3>
  <form id="editRoomForm" style="display:flex;flex-direction:column;width:100%;">
    <!-- Row 1 -->
    <div style="display:flex;gap:12px;margin-bottom:15px;align-items:end;">
      <div style="width:280px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Guest Name</label>
        <input type="text" id="editModalName" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
      <div style="width:120px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Room No.</label>
        <input type="text" id="editModalNumber" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
      <div style="width:110px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Persons</label>
        <input type="number" id="editModalNumPerson" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
      <div style="width:200px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Category</label>
        <select id="editModalCategory" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
          <option value="">Select Category</option>
          <option value="Delux">Delux</option>
          <option value="Super Delux">Super Delux</option>
          <option value="Suite">Suite</option>
          <option value="Family Room">Family Room</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div style="width:190px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Booking Source</label>
        <input type="text" id="editModalBookingSource" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
    </div>
    <!-- Row 2 -->
    <div style="display:flex;gap:12px;margin-bottom:15px;align-items:end;">
      <div style="width:200px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Check In Date & Time</label>
        <input type="datetime-local" id="editModalCheckIn" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
      <div style="width:200px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Check Out Date & Time</label>
        <input type="datetime-local" id="editModalCheckOut" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
      <div style="width:120px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Payment Type</label>
        <select id="editModalPaymentType" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
        </select>
      </div>
      <div style="width:380px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Mobile Number (Optional)</label>
        <input type="text" id="editModalMobile" placeholder="Enter guest mobile number" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
    </div>
    <!-- Row 3 -->
    <div style="display:flex;gap:12px;margin-bottom:15px;align-items:end;">
      <div style="width:130px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Room Tariff (₹)</label>
        <input type="number" id="editModalTariff" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
      <div style="width:140px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Advance Paid (₹)</label>
        <input type="number" id="editModalAdvance" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
      <div style="width:170px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Total Override (₹)</label>
        <input type="number" id="editModalTotalAmount" step="0.01" placeholder="Leave blank for auto-calc" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
      <div style="width:460px;">
        <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Guest Address (Optional)</label>
        <input type="text" id="editModalAddress" placeholder="Enter complete guest address including city, state" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#f9f9f9;color:#333;">
      </div>
    </div>
    
    <!-- Tariff History Section -->
    <div id="tariffHistorySection" style="margin-top:20px;padding-top:15px;border-top:2px solid #f0f0f0;">
      <h4 style="margin:0 0 12px 0;color:#333;font-size:14px;display:flex;align-items:center;gap:8px;">
        📊 Tariff Change History
        <span style="font-size:12px;color:#666;font-weight:normal;">(showing how the room tariff has evolved)</span>
      </h4>
      <div id="tariffHistoryContent" style="max-height:150px;overflow-y:auto;border:1px solid #ddd;border-radius:4px;">
        <table style="width:100%;border-collapse:collapse;font-size:12px;">
          <thead>
            <tr style="background:#f8f9fa;border-bottom:1px solid #ddd;">
              <th style="padding:8px;text-align:left;border-right:1px solid #ddd;font-weight:bold;">Effective From</th>
              <th style="padding:8px;text-align:center;border-right:1px solid #ddd;font-weight:bold;">Tariff (₹/day)</th>
              <th style="padding:8px;text-align:center;border-right:1px solid #ddd;font-weight:bold;">Category</th>
              <th style="padding:8px;text-align:center;font-weight:bold;">Status</th>
            </tr>
          </thead>
          <tbody id="tariffHistoryTableBody">
            <!-- Will be populated by JavaScript -->
          </tbody>
        </table>
      </div>
    </div>

    <!-- Buttons at bottom in horizontal row -->
    <div style="display:flex;justify-content:center;gap:10px;padding-top:15px;border-top:1px solid #eee;margin-top:10px;">
      <button type="submit" id="editModalSave" style="background:#007b00;color:#fff;border:none;border-radius:4px;padding:10px 18px;font-size:13px;font-weight:bold;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);">Save Changes</button>
      <button type="button" id="upgradeRoom" style="background:#ff6b35;color:white;border:none;border-radius:4px;padding:8px 12px;font-size:12px;font-weight:bold;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);" title="Upgrade room tariff instantly">⬆️ Upgrade Room</button>
      <button type="button" id="setCurrentCheckout" style="background:#28a745;color:white;border:none;border-radius:4px;padding:8px 12px;font-size:12px;font-weight:bold;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);" title="Set checkout to current date/time">🕐 Checkout Now</button>
      <button type="button" id="clearCheckout" style="background:#dc3545;color:white;border:none;border-radius:4px;padding:8px 12px;font-size:12px;font-weight:bold;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);" title="Clear checkout (Still In)">🗑️ Clear CheckOut</button>
      <button type="button" id="editModalCancel" style="background:#666;color:#fff;border:none;border-radius:4px;padding:10px 18px;font-size:13px;font-weight:bold;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);">Cancel</button>
    </div>
  </form>
</div>`;
document.body.appendChild(editModal);

// Modal for editing bill details before printing
let billEditModal = document.createElement('div');
billEditModal.id = 'billEditModal';
billEditModal.style.display = 'none';
billEditModal.style.position = 'fixed';
billEditModal.style.top = '0';
billEditModal.style.left = '0';
billEditModal.style.width = '100vw';
billEditModal.style.height = '100vh';
billEditModal.style.background = 'rgba(0,0,0,0.5)';
billEditModal.style.zIndex = '10000';
billEditModal.innerHTML = `<div id="billEditModalContent" style="background:#fff;padding:20px 24px;border-radius:8px;max-width:1200px;max-height:90vh;margin:20px auto;position:relative;box-shadow:0 4px 16px rgba(0,0,0,0.15);font-family:Arial,sans-serif;overflow-y:auto;">
  <h3 id="billEditTitle" style="margin:0 0 16px 0;color:#333;text-align:center;font-size:18px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">Edit Bill Details</h3>
  <form id="billEditForm" style="display:flex;flex-direction:column;width:100%;">
    <!-- Hotel Details -->
    <div style="margin-bottom:15px;padding:12px;background:#f8f9fa;border-radius:6px;">
      <h4 style="margin:0 0 12px 0;color:#333;font-size:15px;">Hotel Information</h4>
      <!-- Row 1: Hotel Basic Info -->
      <div style="display:flex;gap:12px;margin-bottom:12px;align-items:end;">
        <div style="width:250px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Hotel Name</label>
          <input type="text" id="billHotelName" value="HOTEL ROYAL SQUARE" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:180px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">GSTIN (for GST Bill)</label>
          <input type="text" id="billGSTIN" value="24AARFH3491R1ZE" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:140px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Contact Number</label>
          <input type="text" id="billHotelContact" value="9925009094" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:350px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Email Address</label>
          <input type="email" id="billHotelEmail" value="hotelroyalsquare9094@gmail.com" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
      </div>
      <!-- Row 2: Hotel Address -->
      <div style="display:flex;gap:12px;margin-bottom:12px;">
        <div style="width:1130px;">
          <label style="display:block;font-weight:bold;margin-bottom:4px;color:#333;font-size:13px;">Hotel Address</label>
          <textarea id="billHotelAddress" style="height:60px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;resize:vertical;">3rd Floor, Pramukh Square Complex, Above D-Mart,
Sargasan Cross Road, Gandhinagar, SARGASAN 382421</textarea>
        </div>
      </div>
    </div>
    
    <!-- Guest Details -->
    <div style="margin-bottom:15px;padding:12px;background:#f0f8ff;border-radius:6px;">
      <h4 style="margin:0 0 10px 0;color:#333;font-size:15px;">Guest Information</h4>
      <!-- Row 1: Compact Room & Guest Details -->
      <div style="display:flex;gap:10px;margin-bottom:10px;align-items:end;">
        <div style="width:100px;">
          <label style="display:block;font-weight:bold;margin-bottom:4px;color:#333;font-size:13px;height:18px;line-height:18px;">Room No.</label>
          <input type="text" id="billRoomNumber" style="height:32px;padding:6px 8px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:90px;">
          <label style="display:block;font-weight:bold;margin-bottom:4px;color:#333;font-size:13px;height:18px;line-height:18px;">Persons</label>
          <input type="number" id="billNumPersons" style="height:32px;padding:6px 8px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:240px;">
          <label style="display:block;font-weight:bold;margin-bottom:4px;color:#333;font-size:13px;height:18px;line-height:18px;">Bill To Name</label>
          <input type="text" id="billToName" placeholder="Primary Guest Name" style="height:32px;padding:6px 8px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:140px;">
          <label style="display:block;font-weight:bold;margin-bottom:4px;color:#333;font-size:13px;height:18px;line-height:18px;">Mobile</label>
          <input type="text" id="billMobileNumber" placeholder="Mobile Number" style="height:32px;padding:6px 8px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:680px;">
          <label style="display:block;font-weight:bold;margin-bottom:4px;color:#333;font-size:13px;height:18px;line-height:18px;">Guest Address</label>
          <input type="text" id="billToAddress" placeholder="Complete guest address for invoice" style="height:32px;padding:6px 8px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
      </div>
      
      <!-- Guest Names Section -->
      <div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <label style="font-weight:bold;color:#333;font-size:13px;height:18px;line-height:18px;">Additional Guest Names</label>
          <button type="button" id="addGuestBtn" style="background:#28a745;color:#fff;border:none;border-radius:4px;padding:4px 10px;font-size:12px;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);">+ Add Guest</button>
        </div>
        <div id="guestNamesContainer">
          <div class="guest-name-row" style="display:flex;gap:6px;margin-bottom:4px;align-items:center;">
            <input type="text" class="guest-name-input" placeholder="Additional Guest Name" style="flex:1;height:32px;padding:6px 8px;border:2px solid #ccc;border-radius:4px;font-size:13px;background:#fff;color:#333;">
            <button type="button" class="remove-guest-btn" style="background:#dc3545;color:#fff;border:none;border-radius:4px;padding:4px 8px;font-size:12px;cursor:pointer;visibility:hidden;">Remove</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Billing Details -->
    <div style="margin-bottom:15px;padding:12px;background:#f0fff0;border-radius:6px;">
      <h4 style="margin:0 0 12px 0;color:#333;font-size:15px;">Billing Information</h4>
      <!-- Row 1: Basic Billing Fields -->
      <div style="display:flex;gap:12px;margin-bottom:12px;align-items:end;">
        <div style="width:140px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Room Category</label>
          <input type="text" id="billCategory" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:150px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Base Amount (₹)</label>
          <input type="number" id="billBaseAmount" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:110px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">GST Rate (%)</label>
          <input type="number" id="billGSTRate" value="12" min="0" max="28" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
        <div style="width:180px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Base Tariff Includes GST</label>
          <select id="billGSTInclusive" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
            <option value="false">Exclusive (Add GST)</option>
            <option value="true">Inclusive (GST Included)</option>
          </select>
        </div>
        <div style="width:130px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Payment Type</label>
          <select id="billPaymentType" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </select>
        </div>
        <div style="width:150px;">
          <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:13px;height:18px;line-height:18px;">Advance Paid (₹)</label>
          <input type="number" id="billAdvancePaid" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:13px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        </div>
      </div>
    </div>
    
    <!-- GST Calculation Preview -->
    <div id="gstCalculationPreview" style="margin-bottom:15px;padding:12px;background:#fff3cd;border-radius:6px;border:1px solid #ffeaa7;display:none;">
      <h4 style="margin:0 0 8px 0;color:#333;font-size:13px;">GST Calculation Preview:</h4>
      <div id="calculationDetails" style="font-size:12px;color:#666;"></div>
    </div>
    
    <!-- Buttons -->
    <div style="display:flex;justify-content:center;gap:12px;padding-top:15px;border-top:1px solid #eee;margin-top:10px;">
      <button type="button" id="billEditPrintGST" style="background:#28a745;color:#fff;border:none;border-radius:4px;padding:10px 18px;font-size:13px;font-weight:bold;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);">Print GST Bill</button>
      <button type="button" id="billEditPrintNonGST" style="background:#17a2b8;color:#fff;border:none;border-radius:4px;padding:10px 18px;font-size:13px;font-weight:bold;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);">Print Non-GST Bill</button>
      <button type="button" id="billEditCancel" style="background:#666;color:#fff;border:none;border-radius:4px;padding:10px 18px;font-size:13px;font-weight:bold;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);">Cancel</button>
    </div>
  </form>
</div>`;
document.body.appendChild(billEditModal);

// Bill edit modal variables
let currentRoomForBill = null;
let currentBillType = null; // 'gst' or 'non-gst'

// Room upgrade modal
let upgradeModal = document.createElement('div');
upgradeModal.id = 'upgradeModal';
upgradeModal.style.display = 'none';
upgradeModal.style.position = 'fixed';
upgradeModal.style.top = '0';
upgradeModal.style.left = '0';
upgradeModal.style.width = '100vw';
upgradeModal.style.height = '100vh';
upgradeModal.style.background = 'rgba(0,0,0,0.5)';
upgradeModal.style.zIndex = '10001';
upgradeModal.innerHTML = `<div style="background:#fff;padding:32px 40px;border-radius:12px;max-width:600px;margin:60px auto;position:relative;box-shadow:0 8px 32px rgba(0,0,0,0.2);font-family:Arial,sans-serif;">
  <h3 style="margin:0 0 24px 0;color:#333;text-align:center;font-size:20px;border-bottom:2px solid #f0f0f0;padding-bottom:12px;">Room Upgrade</h3>
  <div style="margin-bottom:20px;padding:15px;background:#fff3cd;border-radius:8px;border:1px solid #ffeaa7;">
    <p style="margin:0;color:#28a745;font-size:14px;"><strong>Note:</strong> The upgrade will apply instantly from the selected date. Choose today's date for immediate effect.</p>
  </div>
  <form id="upgradeForm">
    <div style="margin-bottom:20px;">
      <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:14px;">Upgrade Effective Date & Time (Today for instant effect)</label>
      <input type="datetime-local" id="upgradeDate" style="height:42px;padding:10px 12px;border:2px solid #ccc;border-radius:6px;font-size:14px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
    </div>
    <div style="margin-bottom:20px;">
      <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:14px;">New Tariff (per day)</label>
      <input type="number" id="upgradeNewTariff" min="0" step="0.01" style="height:42px;padding:10px 12px;border:2px solid #ccc;border-radius:6px;font-size:14px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
    </div>
    <div style="margin-bottom:20px;">
      <label style="display:block;font-weight:bold;margin-bottom:6px;color:#333;font-size:14px;">New Room Category (optional)</label>
      <select id="upgradeNewCategory" style="height:42px;padding:10px 12px;border:2px solid #ccc;border-radius:6px;font-size:14px;width:100%;box-sizing:border-box;background:#fff;color:#333;">
        <option value="">Keep Same Category</option>
        <option value="Delux">Delux</option>
        <option value="Super Delux">Super Delux</option>
        <option value="Suite">Suite</option>
        <option value="Family Room">Family Room</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div id="upgradePreview" style="margin:20px 0;padding:15px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;display:none;">
      <h4 style="margin:0 0 10px 0;color:#333;">Preview Total Amount Change:</h4>
      <div id="upgradePreviewContent"></div>
    </div>
    <div style="text-align:center;padding-top:20px;border-top:2px solid #f0f0f0;">
      <button type="submit" style="background:#ff6b35;color:#fff;border:none;border-radius:8px;padding:12px 24px;font-size:16px;font-weight:bold;cursor:pointer;margin-right:12px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">Apply Upgrade</button>
      <button type="button" id="upgradeCancel" style="background:#666;color:#fff;border:none;border-radius:8px;padding:12px 24px;font-size:16px;font-weight:bold;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,0.1);">Cancel</button>
    </div>
  </form>
</div>`;
document.body.appendChild(upgradeModal);

let currentRoomIndexForUpgrade = null;

// Guest names management functions
function addGuestNameRow() {
  const container = document.getElementById('guestNamesContainer');
  const newRow = document.createElement('div');
  newRow.className = 'guest-name-row';
  newRow.style.cssText = 'display:flex;gap:10px;margin-bottom:8px;align-items:center;';
  
  newRow.innerHTML = `
    <input type="text" class="guest-name-input" placeholder="Additional Guest Name" style="flex:1;height:42px;padding:10px 12px;border:2px solid #ccc;border-radius:6px;font-size:14px;background:#fff;color:#333;">
    <button type="button" class="remove-guest-btn" style="background:#dc3545;color:#fff;border:none;border-radius:6px;padding:8px 12px;font-size:12px;cursor:pointer;">Remove</button>
  `;
  
  container.appendChild(newRow);
  
  // Add event listener to remove button
  const removeBtn = newRow.querySelector('.remove-guest-btn');
  removeBtn.addEventListener('click', function() {
    newRow.remove();
    updateRemoveButtonsVisibility();
  });
  
  updateRemoveButtonsVisibility();
}

function updateRemoveButtonsVisibility() {
  const rows = document.querySelectorAll('.guest-name-row');
  const removeBtns = document.querySelectorAll('.remove-guest-btn');
  
  // Show remove buttons only if there are multiple rows
  removeBtns.forEach((btn, index) => {
    if (rows.length > 1) {
      btn.style.visibility = 'visible';
    } else {
      btn.style.visibility = 'hidden';
    }
  });
}

function getAllGuestNames() {
  const inputs = document.querySelectorAll('.guest-name-input');
  const names = [];
  inputs.forEach(input => {
    if (input.value.trim()) {
      names.push(input.value.trim());
    }
  });
  return names;
}

function formatGuestListTwoColumns(guestNames) {
  if (!guestNames || guestNames.length === 0) {
    return '';
  }
  
  // If guestNames is a string, just return it in uppercase
  if (typeof guestNames === 'string') {
    return guestNames.toUpperCase();
  }
  
  // If it's an array, join and return in uppercase
  return guestNames.join(', ').toUpperCase();
}

function setGuestNames(namesArray) {
  const container = document.getElementById('guestNamesContainer');
  
  // Clear existing rows
  container.innerHTML = '';
  
  // Add rows for each name
  namesArray.forEach((name, index) => {
    if (index === 0) {
      // First row (primary guest)
      const firstRow = document.createElement('div');
      firstRow.className = 'guest-name-row';
      firstRow.style.cssText = 'display:flex;gap:10px;margin-bottom:8px;align-items:center;';
      firstRow.innerHTML = `
        <input type="text" class="guest-name-input" placeholder="Primary Guest Name" value="${name}" style="flex:1;height:42px;padding:10px 12px;border:2px solid #ccc;border-radius:6px;font-size:14px;background:#fff;color:#333;">
        <button type="button" class="remove-guest-btn" style="background:#dc3545;color:#fff;border:none;border-radius:6px;padding:8px 12px;font-size:12px;cursor:pointer;visibility:hidden;">Remove</button>
      `;
      container.appendChild(firstRow);
    } else {
      // Additional rows
      addGuestNameRow();
      const inputs = document.querySelectorAll('.guest-name-input');
      inputs[inputs.length - 1].value = name;
    }
  });
  
  updateRemoveButtonsVisibility();
}

// Add event listener for the "Add Guest" button (after modal is created)
setTimeout(() => {
  const addBtn = document.getElementById('addGuestBtn');
  if (addBtn) {
    addBtn.addEventListener('click', addGuestNameRow);
  }
  
  // Add event listeners for GST calculation preview
  const baseAmountInput = document.getElementById('billBaseAmount');
  const gstRateInput = document.getElementById('billGSTRate');
  const gstInclusiveSelect = document.getElementById('billGSTInclusive');
  const previewDiv = document.getElementById('gstCalculationPreview');
  const calculationDetails = document.getElementById('calculationDetails');
  
  function updateGSTCalculationPreview() {
    const baseAmount = parseFloat(baseAmountInput.value) || 0;
    const gstRate = parseFloat(gstRateInput.value) || 0;
    const isInclusive = gstInclusiveSelect.value === 'true';
    
    if (baseAmount > 0 && gstRate > 0) {
      let displayBaseAmount, cgstAmount, sgstAmount, totalAmount;
      
      if (isInclusive) {
        // Base amount includes GST
        totalAmount = baseAmount;
        const gstMultiplier = 1 + (gstRate / 100);
        displayBaseAmount = totalAmount / gstMultiplier;
        const totalGSTAmount = totalAmount - displayBaseAmount;
        cgstAmount = totalGSTAmount / 2;
        sgstAmount = totalGSTAmount / 2;
      } else {
        // Base amount excludes GST
        displayBaseAmount = baseAmount;
        cgstAmount = (displayBaseAmount * (gstRate / 2)) / 100;
        sgstAmount = (displayBaseAmount * (gstRate / 2)) / 100;
        totalAmount = displayBaseAmount + cgstAmount + sgstAmount;
      }
      
      calculationDetails.innerHTML = `
        <div><strong>Base Amount (excluding GST):</strong> ₹${displayBaseAmount.toFixed(2)}</div>
        <div><strong>CGST (${(gstRate/2).toFixed(1)}%):</strong> ₹${cgstAmount.toFixed(2)}</div>
        <div><strong>SGST (${(gstRate/2).toFixed(1)}%):</strong> ₹${sgstAmount.toFixed(2)}</div>
        <div style="border-top:1px solid #ddd;padding-top:5px;margin-top:5px;"><strong>Total Amount (including GST):</strong> ₹${totalAmount.toFixed(2)}</div>
      `;
      previewDiv.style.display = 'block';
    } else {
      previewDiv.style.display = 'none';
    }
  }
  
  if (baseAmountInput) baseAmountInput.addEventListener('input', updateGSTCalculationPreview);
  if (gstRateInput) gstRateInput.addEventListener('input', updateGSTCalculationPreview);
  if (gstInclusiveSelect) gstInclusiveSelect.addEventListener('change', updateGSTCalculationPreview);
}, 100);

// Function to show bill edit modal with pre-filled data
function showBillEditModal(room, billType) {
  currentRoomForBill = room;
  currentBillType = billType;
  
  // Pre-fill hotel information with default values
  document.getElementById('billHotelName').value = 'HOTEL ROYAL SQUARE';
  document.getElementById('billGSTIN').value = '24AARFH3491R1ZE';
  document.getElementById('billHotelAddress').value = '3rd Floor, Pramukh Square Complex, Above D-Mart,\nSargasan Cross Road, Gandhinagar, SARGASAN 382421';
  document.getElementById('billHotelContact').value = '9925009094';
  document.getElementById('billHotelEmail').value = 'hotelroyalsquare9094@gmail.com';
  
  // Pre-fill guest information from room data
  document.getElementById('billRoomNumber').value = room.number || '';
  document.getElementById('billNumPersons').value = room.numPerson || 1;
  
  // Handle guest names (can be multiple guests separated by commas)
  const guestNames = room.name ? room.name.split(',').map(name => name.trim()) : ['Guest Name'];
  setGuestNames(guestNames);
  
  // Pre-fill Bill To name with primary guest name
  document.getElementById('billToName').value = guestNames[0] || 'Guest Name';
  document.getElementById('billToAddress').value = room.address || 'Guest Address';
  document.getElementById('billMobileNumber').value = room.mobile || '';
  
  // Pre-fill billing information
  document.getElementById('billCategory').value = room.category || '';
  
  // Use total amount from room bookings table as base amount
  const tableTotal = calculateTotalWithUpgrade(room);
  const baseAmount = room.totalAmountOverride !== null && room.totalAmountOverride !== undefined 
    ? room.totalAmountOverride 
    : tableTotal;
  document.getElementById('billBaseAmount').value = baseAmount;
  
  // Pre-fill payment details
  document.getElementById('billGSTRate').value = 12;
  document.getElementById('billGSTInclusive').value = 'false'; // Default to GST exclusive
  document.getElementById('billPaymentType').value = room.paymentType || 'Cash';
  document.getElementById('billAdvancePaid').value = room.advancePaid || 0;
  
  // Update modal title
  document.getElementById('billEditTitle').textContent = 'Edit Bill Details - Choose Print Option';
  
  // Show modal
  document.getElementById('billEditModal').style.display = 'block';
}

// Event listeners for bill edit modal buttons
document.getElementById('billEditCancel').addEventListener('click', function() {
  document.getElementById('billEditModal').style.display = 'none';
  currentRoomForBill = null;
  currentBillType = null;
});

// Event listener for Print GST Bill button
document.getElementById('billEditPrintGST').addEventListener('click', function() {
  if (!currentRoomForBill) return;
  
  // Get edited values from form
  const allGuestNames = getAllGuestNames();
  const editedData = {
    hotelName: document.getElementById('billHotelName').value,
    hotelGSTIN: document.getElementById('billGSTIN').value,
    hotelAddress: document.getElementById('billHotelAddress').value,
    hotelContact: document.getElementById('billHotelContact').value,
    hotelEmail: document.getElementById('billHotelEmail').value,
    guestName: allGuestNames.join(', '),
    guestNames: allGuestNames,
    billToName: document.getElementById('billToName').value,
    billToAddress: document.getElementById('billToAddress').value,
    mobileNo: document.getElementById('billMobileNumber').value,
    roomNumber: document.getElementById('billRoomNumber').value,
    numPersons: parseInt(document.getElementById('billNumPersons').value),
    category: document.getElementById('billCategory').value,
    baseAmount: parseFloat(document.getElementById('billBaseAmount').value),
    gstRate: parseFloat(document.getElementById('billGSTRate').value),
    gstInclusive: document.getElementById('billGSTInclusive').value === 'true',
    paymentType: document.getElementById('billPaymentType').value,
    advancePaid: parseFloat(document.getElementById('billAdvancePaid').value) || 0
  };
  
  // Hide modal
  document.getElementById('billEditModal').style.display = 'none';
  
  // Print GST bill with edited data
  printGSTBillWithCustomData(currentRoomForBill, editedData);
  
  currentRoomForBill = null;
  currentBillType = null;
});

// Event listener for Print Non-GST Bill button
document.getElementById('billEditPrintNonGST').addEventListener('click', function() {
  if (!currentRoomForBill) return;
  
  // Get edited values from form
  const allGuestNames = getAllGuestNames();
  const editedData = {
    hotelName: document.getElementById('billHotelName').value,
    hotelGSTIN: document.getElementById('billGSTIN').value,
    hotelAddress: document.getElementById('billHotelAddress').value,
    hotelContact: document.getElementById('billHotelContact').value,
    hotelEmail: document.getElementById('billHotelEmail').value,
    guestName: allGuestNames.join(', '),
    guestNames: allGuestNames,
    billToName: document.getElementById('billToName').value,
    billToAddress: document.getElementById('billToAddress').value,
    mobileNo: document.getElementById('billMobileNumber').value,
    roomNumber: document.getElementById('billRoomNumber').value,
    numPersons: parseInt(document.getElementById('billNumPersons').value),
    category: document.getElementById('billCategory').value,
    baseAmount: parseFloat(document.getElementById('billBaseAmount').value),
    gstRate: parseFloat(document.getElementById('billGSTRate').value),
    gstInclusive: document.getElementById('billGSTInclusive').value === 'true',
    paymentType: document.getElementById('billPaymentType').value,
    advancePaid: parseFloat(document.getElementById('billAdvancePaid').value) || 0
  };
  
  // Hide modal
  document.getElementById('billEditModal').style.display = 'none';
  
  // Print Non-GST bill with edited data
  printNonGSTBillWithCustomData(currentRoomForBill, editedData);
  
  currentRoomForBill = null;
  currentBillType = null;
});

const categoryPrices = {
  'Delux': 2000,
  'Super Delux': 2400,
  'Suite': 4000,
  'Family Room': 3500
};
const categorySelect = document.getElementById('category');
const roomPriceInput = document.getElementById('roomPrice');
const roomNumberInput = document.getElementById('roomNumber');
const roomForm = document.getElementById('roomForm');
const roomTableBody = document.getElementById('roomTableBody');
const upcomingCheckinTableBody = document.getElementById('upcomingCheckinTableBody');

// Add single delegated event listener for all table buttons to prevent duplicates
roomTableBody.addEventListener('click', function(e) {
  // Handle delete button clicks
  if (e.target.classList.contains('delete-room-btn')) {
    const idx = parseInt(e.target.getAttribute('data-index'));
    if (confirm('Are you sure you want to delete this room booking?')) {
      rooms.splice(idx, 1);
      localStorage.setItem('hotelRooms', JSON.stringify(rooms));
      renderRoomTable();
      renderUpcomingCheckinsTable();
      updateTotalCollection();
    }
  }
  
  // Handle bill button clicks
  if (e.target.classList.contains('bill-btn')) {
    const idx = parseInt(e.target.getAttribute('data-index'));
    showBillEditModal(rooms[idx], 'both');
  }
});

// Add single delegated event listener for upcoming check-ins table buttons
upcomingCheckinTableBody.addEventListener('click', function(e) {
  // Handle check in now button clicks
  if (e.target.classList.contains('checkin-now-btn')) {
    const idx = parseInt(e.target.getAttribute('data-index'));
    if (confirm('Check in this guest now? This will move the booking to the main Room Booking table.')) {
      // Update check-in time to current date/time
      const currentDateTime = new Date().toISOString().slice(0, 16);
      rooms[idx].checkIn = currentDateTime;
      
      localStorage.setItem('hotelRooms', JSON.stringify(rooms));
      renderRoomTable();
      renderUpcomingCheckinsTable();
      updateTotalCollection();
    }
  }
  
  // Handle edit button clicks for upcoming check-ins
  if (e.target.classList.contains('edit-upcoming-btn')) {
    const idx = parseInt(e.target.getAttribute('data-index'));
    // showEditModal(idx);
  }
  
  // Handle delete button clicks for upcoming check-ins
  if (e.target.classList.contains('delete-upcoming-btn')) {
    const idx = parseInt(e.target.getAttribute('data-index'));
    if (confirm('Are you sure you want to delete this upcoming check-in?')) {
      rooms.splice(idx, 1);
      localStorage.setItem('hotelRooms', JSON.stringify(rooms));
      renderRoomTable();
      renderUpcomingCheckinsTable();
      updateTotalCollection();
    }
  }
});

const totalCollection = document.getElementById('totalCollection');
const paymentTypeSelect = document.getElementById('paymentType');
const bookingSourceSelect = document.getElementById('bookingSource');
const guestNameInput = document.getElementById('guestName');
const checkInTimeInput = document.getElementById('checkInTime');
const checkOutTimeInput = document.getElementById('checkOutTime');
const advancePaidInput = document.getElementById('advancePaid');
let rooms = [];
let foodBills = [];

// Add event listener to update room number field behavior based on check-in date
checkInTimeInput.addEventListener('change', function() {
  const checkInValue = this.value;
  if (!checkInValue) return;
  
  const currentDate = new Date();
  const checkInDate = new Date(checkInValue);
  const isFutureBooking = checkInDate > currentDate;
  
  if (isFutureBooking) {
    roomNumberInput.placeholder = 'Room Number (Optional for future bookings)';
    roomNumberInput.style.borderColor = '#28a745'; // Green border for optional
    roomNumberInput.title = 'Room number is optional for future bookings. You can assign it later.';
    roomNumberInput.required = false;
  } else {
    roomNumberInput.placeholder = 'Room Number (Required)';
    roomNumberInput.style.borderColor = '#dc3545'; // Red border for required
    roomNumberInput.title = 'Room number is required for immediate bookings.';
    roomNumberInput.required = true;
  }
});

// Load rooms from localStorage on page load

let canteenBills = [];
let renderCanteenBillTable;
const canteenBillForm = document.getElementById('canteenBillForm');
const canteenBillRoomInput = document.getElementById('canteenBillRoom');
const canteenBillAmountInput = document.getElementById('canteenBillAmount');
const canteenBillTableBody = document.getElementById('canteenBillTableBody');

renderCanteenBillTable = function() {
  if (!canteenBillTableBody) return;
  canteenBillTableBody.innerHTML = '';
  let total = 0;
  if (canteenBills.length === 0) {
    canteenBillTableBody.innerHTML = '<tr class="empty-row"><td colspan="2">No canteen bills added yet.</td></tr>';
    if (document.getElementById('canteenBillTotal')) document.getElementById('canteenBillTotal').textContent = 'Total Canteen Bill: ₹0';
    return;
  }
  canteenBills.forEach((bill, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${bill.room}</td><td>${bill.amount}</td><td><button class='delete-canteen-btn' data-index='${idx}' style='background:#b30000;color:#fff;border:none;border-radius:4px;padding:4px 10px;cursor:pointer;'>Delete</button></td>`;
    canteenBillTableBody.appendChild(tr);
    total += bill.amount;
  });
  // Add event listeners for delete buttons
  const deleteBtns = canteenBillTableBody.querySelectorAll('.delete-canteen-btn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const index = parseInt(btn.getAttribute('data-index'));
      canteenBills.splice(index, 1);
      localStorage.setItem('hotelCanteenBills', JSON.stringify(canteenBills));
      renderCanteenBillTable();
      renderCategoryCollectionTable();
    });
  });
  const trTotal = document.createElement('tr');
  trTotal.style.fontWeight = 'bold';
  trTotal.innerHTML = `<td>Total</td><td>${total}</td>`;
  canteenBillTableBody.appendChild(trTotal);
  if (document.getElementById('canteenBillTotal')) document.getElementById('canteenBillTotal').textContent = `Total Canteen Bill: ₹${total}`;
}

window.addEventListener('DOMContentLoaded', function() {
  // Add Print Room Booking and Print Total Collection buttons
  const printRoomBtn = document.createElement('button');
  printRoomBtn.textContent = 'Print Room Booking';
  printRoomBtn.style = 'margin: 8px 8px 8px 0; padding: 8px 18px; font-weight: bold; border-radius: 8px; background: #007bff; color: #fff; border: none;';
  const printTotalBtn = document.createElement('button');
  printTotalBtn.textContent = 'Print Total Collection';
  printTotalBtn.style = 'margin: 8px 0; padding: 8px 18px; font-weight: bold; border-radius: 8px; background: #007b00; color: #fff; border: none;';
  const bookingSection = document.getElementById('booking-section');
  bookingSection.insertBefore(printRoomBtn, bookingSection.querySelector('table'));
  bookingSection.insertBefore(printTotalBtn, bookingSection.querySelector('table'));

  printRoomBtn.addEventListener('click', function() {
    let html = '<html><head><title>Room Booking Print</title>';
    html += '<style>table { width: 100%; border-collapse: collapse; border: 2px solid #333; } th, td { padding: 8px 16px; text-align: center; border: 1px solid #333; } th { background: #f0f0f0; font-weight: bold; } .header { text-align: center; margin-bottom: 20px; } .hotel-title { font-size: 24px; font-weight: bold; margin-bottom: 5px; color: #000; } .print-date { font-size: 14px; color: #000; font-weight: bold; }</style>';
    html += '</head><body>';
    html += '<div class="header">';
    html += '<div class="hotel-title">HOTEL ROYAL SQUARE</div>';
    html += '<div class="print-date">Date: ' + new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>';
    html += '</div>';
    html += '<table><thead><tr>';
    html += '<th>SR NO</th><th>Rg No</th><th>GUEST NAME</th><th>PR</th><th>CHECK-IN DATE</th><th>TIME</th><th>CHECK-OUT DATE</th><th>TIME</th><th>TARIFF</th><th>ADVANCE PAID</th><th>ROOM NUMBER</th><th>DAYS</th>`';
    html += '</tr></thead><tbody>';
    // Read from Room Booking table in DOM
    const tableBody = document.getElementById('roomTableBody');
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(tr => {
      const tds = tr.querySelectorAll('td');
      if (tds.length >= 13) { // Only data rows
        // New column order: Sr No, Rg No Guest Name, PR, Check-in, Check-out, Room Number, Tariff (Cash), Tariff (Online), Advance Paid, Days, Status, Total Amount, Actions/Bills
        const name = tds[2].textContent.trim();
        const numPerson = tds[3].textContent.trim(); // PR column
        const checkIn = tds[4].textContent.trim();
        const checkOut = tds[5].textContent.trim();
        const roomNo = tds[6].textContent.trim();
        const advancePaid = tds[12].textContent.trim();
        const numDays = tds[10].textContent.trim(); // Days column
        // const totalAmount = tds[12].textContent.trim(); // Total Amount column
        const srNo = tds[0].textContent.trim(); // Sr No column
        const regNo = tds[1].textContent.trim(); // Reg No column
        const tariff = tds[7].textContent.trim() !== '0' ? tds[7].textContent.trim() : tds[8].textContent.trim(); // Use Cash tariff if available, otherwise Online tariff
        
        // Split check-in and check-out into date and time components
        // The datetime is already formatted as "DD/MM/YYYY HH:MM AM/PM", so we need to extract correctly
        const checkInParts = checkIn.split(' ');
        const checkInDate = checkInParts[0] || '';
        const checkInTime = checkInParts.length >= 3 ? `${checkInParts[1]} ${checkInParts[2]}` : checkInParts[1] || '';
        
        const checkOutParts = checkOut.split(' ');
        const checkOutDate = checkOutParts[0] || '';
        const checkOutTime = checkOutParts.length >= 3 ? `${checkOutParts[1]} ${checkOutParts[2]}` : checkOutParts[1] || '';
        
  const rowStyle = Number(numDays) > 1 ? " style='color:red;font-weight:bold;'" : '';
  html += `<tr${rowStyle}><td>${srNo}</td><td>${regNo}</td><td>${name}</td><td>${numPerson}</td><td>${checkInDate}</td><td>${checkInTime}</td><td>${checkOutDate}</td><td>${checkOutTime}</td><td>${tariff}</td><td>${advancePaid}</td><td>${roomNo}</td><td>${numDays}</td>`; //<td>${totalAmount}</td></tr>`;
      }
    });
    html += '</tbody></table>';
    html += '</body></html>';
    
    // Show options modal for print or download image
    showPrintOptionsModal(html, 'Booking');
  });

  // Function to show print options modal
  function showPrintOptionsModal(htmlContent, reportTitle) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const defaultDate = `${yyyy}-${mm}-${dd}`;
    let dateInputHtml = `
      <label for="printRoomBookingDate" style="font-weight:bold;color:#333;font-size:14px;">Date for Print:</label>
      <input type="date" id="printRoomBookingDate" value="${defaultDate}" style="height:36px;padding:8px 10px;border:2px solid #ccc;border-radius:4px;font-size:14px;background:#fff;color:#333;margin:0 10px 0 10px;" />
      <br><br>
    `;
    // Hide date input for Total Collection print
    if (reportTitle.toLowerCase().includes('accounts')) {
      dateInputHtml = '';
    }
    const modalHtml = `
      <div id="printOptionsModal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10000;display:flex;align-items:center;justify-content:center;">
        <div style="background:#fff;border-radius:12px;padding:24px;text-align:center;min-width:350px;">
          <h3 style="margin:0 0 20px 0;color:#333;">Choose Action for ${reportTitle}</h3>
          <div style="margin-bottom:20px;">
            ${dateInputHtml}
            <button onclick="printReport('${reportTitle}')" style="margin:5px 10px;padding:12px 20px;background:#007b00;color:#fff;border:none;border-radius:6px;font-weight:bold;cursor:pointer;min-width:120px;">
              🖨️ Print
            </button>
            <br>
            <button onclick="downloadAsImage('${reportTitle}')" style="margin:5px 10px;padding:12px 20px;background:#007bff;color:#fff;border:none;border-radius:6px;font-weight:bold;cursor:pointer;min-width:120px;">
              � Download Image
            </button>
          </div>
          <button onclick="closePrintOptionsModal()" style="padding:8px 16px;background:#dc3545;color:#fff;border:none;border-radius:6px;cursor:pointer;">
            Cancel
          </button>
        </div>
      </div>
    `;
    
    // Store the HTML content for later use
    window.currentReportHtml = htmlContent;
    window.currentReportTitle = reportTitle;
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  // Function to close print options modal
  window.closePrintOptionsModal = function() {
    const modal = document.getElementById('printOptionsModal');
    if (modal) modal.remove();
    delete window.currentReportHtml;
    delete window.currentReportTitle;
  };

  // Function to print report
  window.printReport = function(reportTitle) {
    // Get selected date from modal
    let selectedDate = '';
    const dateInput = document.getElementById('printRoomBookingDate');
    if (dateInput && dateInput.value) {
      // Convert YYYY-MM-DD to DD/MM/YYYY
      const parts = dateInput.value.split('-');
      if (parts.length === 3) {
        selectedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
      } else {
        selectedDate = dateInput.value;
      }
    } else {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      selectedDate = `${dd}/${mm}/${yyyy}`;
    }
    // Replace print date in header
    let htmlToPrint = window.currentReportHtml.replace(/<div class="print-date">Date: .*?<\/div>/, `<div class="print-date">Date: ${selectedDate}</div>`);
    const win = window.open('', '', 'width=900,height=700');
    win.document.write(htmlToPrint);
    win.document.close();
    win.print();
    closePrintOptionsModal();
  };

  // Function to download as image
  window.downloadAsImage = function(reportTitle) {
    // Create a temporary div to render the HTML
    const tempDiv = document.createElement('div');
    // Get selected date from modal
    let selectedDate = '';
    const dateInput = document.getElementById('printRoomBookingDate');
    if (dateInput && dateInput.value) {
      selectedDate = dateInput.value;
    } else {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      selectedDate = `${dd}/${mm}/${yyyy}`;
    }
    // Replace print date in header
    let htmlToImage = window.currentReportHtml.replace(/<div class="print-date">Date: .*?<\/div>/, `<div class="print-date">Date: ${selectedDate}</div>`);
    tempDiv.innerHTML = htmlToImage;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.style.background = '#fff';
    tempDiv.style.padding = '20px';
    tempDiv.style.width = 'max-content';
    tempDiv.style.minWidth = '1000px';
    tempDiv.style.height = 'auto';
    tempDiv.style.overflow = 'visible';
    tempDiv.style.fontSize = '12px';
    
    document.body.appendChild(tempDiv);
    
    // Allow initial render
    setTimeout(() => {
      // Optimize tables for better fitting
      const tables = tempDiv.querySelectorAll('table');
      tables.forEach((table, index) => {
        table.style.width = '100%';
        table.style.tableLayout = 'auto';
        table.style.borderCollapse = 'collapse';
        table.style.fontSize = '11px';
        
        // Adjust cell padding and styling for better fit
        const cells = table.querySelectorAll('th, td');
        cells.forEach(cell => {
          cell.style.padding = '6px 8px';
          cell.style.whiteSpace = 'nowrap';
          cell.style.textAlign = 'center';
          cell.style.fontSize = '11px';
          cell.style.lineHeight = '1.2';
        });
        
        // For tables with many columns, apply responsive column widths
        const headers = table.querySelectorAll('th');
        if (headers.length > 8) { // If table has many columns
          headers.forEach((header, colIndex) => {
            const headerText = header.textContent.trim().toUpperCase();
            
            // Set optimal widths based on column content type
            if (headerText.includes('SR') || headerText.includes('NO')) {
              header.style.width = '50px';
            } else if (headerText.includes('GUEST') || headerText.includes('NAME')) {
              header.style.width = '120px';
            } else if (headerText.includes('PR') || headerText.includes('DAYS')) {
              header.style.width = '40px';
            } else if (headerText.includes('DATE')) {
              header.style.width = '90px';
            } else if (headerText.includes('TIME')) {
              header.style.width = '70px';
            } else if (headerText.includes('ROOM') || headerText.includes('NUMBER')) {
              header.style.width = '80px';
            } else if (headerText.includes('TARIFF') || headerText.includes('AMOUNT')) {
              header.style.width = '90px';
            } else if (headerText.includes('ADVANCE') || headerText.includes('PAID')) {
              header.style.width = '80px';
            } else {
              header.style.width = 'auto';
            }
          });
        }
      });
      
      // Wait for layout to settle after width adjustments
      setTimeout(() => {
        // Get the actual content dimensions after optimization
        const contentWidth = Math.min(tempDiv.scrollWidth, 1400); // Cap at reasonable width
        const contentHeight = tempDiv.scrollHeight;
        
        // Adjust container to fit content
        tempDiv.style.width = contentWidth + 'px';
        
        // Use html2canvas to convert to image with optimized settings
        html2canvas(tempDiv, {
          backgroundColor: '#ffffff',
          scale: 1.2,
          useCORS: true,
          allowTaint: false,
          width: contentWidth,
          height: contentHeight,
          scrollX: 0,
          scrollY: 0,
          logging: false,
          letterRendering: true,
          onrendered: function(canvas) {
            // Fallback for older versions
          }
        }).then(canvas => {
          // Remove temporary div
          document.body.removeChild(tempDiv);
          
          // Convert canvas to blob and download directly
          canvas.toBlob(function(blob) {
            // Create download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${reportTitle.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.png`;
            
            // Trigger download directly
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            // Close the options modal
            closePrintOptionsModal();
            
          }, 'image/png', 0.95);
        }).catch(error => {
          console.error('Error generating image:', error);
          alert('Error generating image. Please try printing instead.');
          closePrintOptionsModal();
        });
      }, 200); // Wait for layout adjustments
    }, 100); // Wait for initial render
  };

  printTotalBtn.addEventListener('click', function() {
    showPrintTotalEditModal();
  });

  function showPrintTotalEditModal() {
    // Create modal HTML
    const modalHtml = `
      <div id="printTotalEditModal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10000;display:flex;align-items:center;justify-content:center;">
        <div style="background:#fff;border-radius:12px;padding:24px;max-width:90%;max-height:90%;overflow-y:auto;min-width:800px;">
          <h3 style="margin:0 0 20px 0;color:#333;text-align:center;">Edit Values Before Printing Total Collection</h3>
          <div id="editableRoomsContainer"></div>
          <div style="margin-top:20px;text-align:center;">
            <button onclick="proceedWithPrint()" style="margin-right:10px;padding:10px 20px;background:#007b00;color:#fff;border:none;border-radius:6px;font-weight:bold;cursor:pointer;">Print</button>
            <button onclick="closePrintTotalEditModal()" style="padding:10px 20px;background:#dc3545;color:#fff;border:none;border-radius:6px;font-weight:bold;cursor:pointer;">Cancel</button>
          </div>
        </div>
      </div>
    `;
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Populate with current room data
    populateEditableRooms();
  }

  function populateEditableRooms() {
    const container = document.getElementById('editableRoomsContainer');
    let html = '<table style="width:100%;border-collapse:collapse;margin-bottom:20px;">';
    html += '<thead><tr style="background:#f0f0f0;"><th style="padding:8px;border:1px solid #ddd;">Room Number</th><th style="padding:8px;border:1px solid #ddd;">Guest Name</th><th style="padding:8px;border:1px solid #ddd;">Tariff Cash</th><th style="padding:8px;border:1px solid #ddd;">Tariff Online</th><th style="padding:8px;border:1px solid #ddd;">Total</th></tr></thead><tbody>';
    
    // Filter out future check-ins for print total collection
    const currentDate = new Date();
    const currentRooms = rooms.filter(room => {
      const checkInDate = new Date(room.checkIn);
      return checkInDate <= currentDate;
    });
    
    currentRooms.forEach((room, index) => {
      const cash = room.paymentType === 'Cash' ? room.price : 0;
      const online = room.paymentType === 'Online' ? room.price : 0;
      const total = cash + online;
      
      html += `<tr>`;
      html += `<td style="padding:8px;border:1px solid #ddd;">${room.number || ''}</td>`;
      html += `<td style="padding:8px;border:1px solid #ddd;">${room.name || ''}</td>`;
      html += `<td style="padding:8px;border:1px solid #ddd;"><input type="number" id="cashEdit_${index}" value="${cash}" style="width:100px;padding:4px;border:1px solid #ccc;border-radius:4px;" onchange="updateRowTotal(${index})"></td>`;
      html += `<td style="padding:8px;border:1px solid #ddd;"><input type="number" id="onlineEdit_${index}" value="${online}" style="width:100px;padding:4px;border:1px solid #ccc;border-radius:4px;" onchange="updateRowTotal(${index})"></td>`;
      html += `<td style="padding:8px;border:1px solid #ddd;font-weight:bold;" id="totalDisplay_${index}">${total}</td>`;
      html += `</tr>`;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
  }

  // Make functions globally accessible
  window.updateRowTotal = function(index) {
    const cash = parseFloat(document.getElementById(`cashEdit_${index}`).value) || 0;
    const online = parseFloat(document.getElementById(`onlineEdit_${index}`).value) || 0;
    const total = cash + online;
    document.getElementById(`totalDisplay_${index}`).textContent = total;
  };

  window.closePrintTotalEditModal = function() {
    const modal = document.getElementById('printTotalEditModal');
    if (modal) modal.remove();
  };

  window.proceedWithPrint = function() {
    // Update only current rooms with edited values (not future check-ins)
    const currentDate = new Date();
    const currentRoomIndices = [];
    rooms.forEach((room, index) => {
      const checkInDate = new Date(room.checkIn);
      if (checkInDate <= currentDate) {
        currentRoomIndices.push(index);
      }
    });
    
    currentRoomIndices.forEach((roomIndex, currentIndex) => {
      const cash = parseFloat(document.getElementById(`cashEdit_${currentIndex}`).value) || 0;
      const online = parseFloat(document.getElementById(`onlineEdit_${currentIndex}`).value) || 0;
      
      const room = rooms[roomIndex];
      if (cash > 0 && online === 0) {
        room.paymentType = 'Cash';
        room.price = cash;
      } else if (online > 0 && cash === 0) {
        room.paymentType = 'Online';
        room.price = online;
      } else if (cash > 0 && online > 0) {
        // If both have values, prioritize the larger one
        if (cash >= online) {
          room.paymentType = 'Cash';
          room.price = cash;
        } else {
          room.paymentType = 'Online';
          room.price = online;
        }
      }
    });
    
    // Close modal
    closePrintTotalEditModal();
    
    // Proceed with print
    executeActualPrint();
  };

  function executeActualPrint() {
    // Load fresh data from localStorage for printing
    const storedCanteenBills = localStorage.getItem('hotelCanteenBills');
    const storedExpenses = localStorage.getItem('hotelExpenses');
    
    const printCanteenBills = storedCanteenBills ? JSON.parse(storedCanteenBills) : [];
    const printExpenses = storedExpenses ? JSON.parse(storedExpenses) : [];
    
    let html = '<html><head><title>Accounts</title>';
    html += '<style>table { width: 100%; border-collapse: collapse; border: 2px solid #333; } th, td { padding: 8px 16px; text-align: center; border: 1px solid #333; } th { background: #f0f0f0; font-weight: bold; }</style>';
    html += '</head><body>';
    html += '<h2 style="text-align:center;">Accounts</h2>';
    html += '<table><thead><tr>';
    html += '<th>Room Number</th><th>Tariff (Cash)</th><th>Tariff (Online)</th><th>Canteen Bill</th><th>Expenses</th><th>Row Total</th>';
    html += '</tr></thead><tbody>';
    let totalCash = 0, totalOnline = 0, totalCanteenInTable = 0, totalExpenseInTable = 0;
    
    // Create rows for each room booking (no canteen bill per room)
    // Filter out future check-ins for print total collection
    const currentDate = new Date();
    const currentRooms = rooms.filter(room => {
      const checkInDate = new Date(room.checkIn);
      return checkInDate <= currentDate;
    });
    
    currentRooms.forEach((room, index) => {
      const cash = room.paymentType === 'Cash' ? room.price : 0;
      const online = room.paymentType === 'Online' ? room.price : 0;
      
      // No canteen bill per room - it's a general total
      const canteenForRoom = 0;
      
      // Calculate expenses for this specific room booking  
      const expensesForRoom = printExpenses
        .filter(exp => exp.room === room.number)
        .reduce((sum, exp) => sum + (exp.amount || 0), 0);
      
      const rowTotal = cash + online; // Row total should only include tariff amounts
      
      // Show room number with booking index if there are multiple bookings for same room
      const duplicateRooms = currentRooms.filter(r => r.number === room.number);
      const roomDisplay = duplicateRooms.length > 1 ? 
        `${room.number} (${duplicateRooms.findIndex(r => r === room) + 1})` : 
        room.number;
      
      html += `<tr><td>${roomDisplay || ''}</td><td>${cash || 0}</td><td>${online || 0}</td><td>${canteenForRoom}</td><td>${expensesForRoom || 0}</td><td><strong>${rowTotal}</strong></td></tr>`;
      
      totalCash += cash;
      totalOnline += online;
      totalExpenseInTable += expensesForRoom;
    });
    
    // Add row for total canteen bill (general total)
    const totalCanteenBill = printCanteenBills.reduce((sum, bill) => sum + (bill.amount || 0), 0);
    
    if (totalCanteenBill > 0) {
      html += `<tr style="background:#e9f5e9;"><td><em>Total Canteen Bill</em></td><td>0</td><td>0</td><td>${totalCanteenBill}</td><td>0</td><td><strong>0</strong></td></tr>`;
      totalCanteenInTable += totalCanteenBill;
    }
    
    // Add row for general expenses (not room-specific)
    const generalExpenses = printExpenses
      .filter(exp => !exp.room || exp.room === '')
      .reduce((sum, exp) => sum + (exp.amount || 0), 0);
    
    if (generalExpenses > 0) {
      html += `<tr style="background:#fff3cd;"><td><em>General Expenses</em></td><td>0</td><td>0</td><td>0</td><td>${generalExpenses}</td><td><strong>0</strong></td></tr>`;
      totalExpenseInTable += generalExpenses;
    }
    
    // Total row - Row Total should only show tariff totals
    const tableGrandTotal = totalCash + totalOnline; // Only tariff amounts in Row Total
    html += `<tr style="font-weight:bold; background:#f0f0f0; border-top: 2px solid #333;"><td><strong>TOTAL</strong></td><td><strong>${totalCash}</strong></td><td><strong>${totalOnline}</strong></td><td><strong>${totalCanteenInTable}</strong></td><td><strong>${totalExpenseInTable}</strong></td><td><strong>${tableGrandTotal}</strong></td></tr>`;
    
    html += '</tbody></table>';
    
    // Summary with Outstanding Balance
    html += '<h3 style="margin-top:32px;">Summary</h3>';
    html += '<table><thead><tr><th>Category</th><th>Cash</th><th>Online</th><th>Canteen (+)</th><th>Expenses (-)</th><th>Net Balance</th></tr></thead><tbody>';
    
    // Category-wise breakdown
    const categories = ['Delux', 'Super Delux', 'Suite', 'Family Room', 'Other'];
    let summaryTotalCash = 0, summaryTotalOnline = 0, summaryTotalCanteen = 0, summaryTotalExpense = 0;
    
    categories.forEach(cat => {
      let filtered;
      if (cat === 'Other') {
        // For 'Other', include rooms with no category or categories not in the predefined list
        // Also filter out future check-ins
        filtered = currentRooms.filter(r => !r.category || r.category === '' || 
          !['Delux', 'Super Delux', 'Suite', 'Family Room'].includes(r.category) || 
          r.category === 'Other');
      } else {
        // Filter out future check-ins for summary calculations
        filtered = currentRooms.filter(r => r.category === cat);
      }
      
      if (filtered.length > 0) {
        const cash = filtered.filter(r => r.paymentType === 'Cash').reduce((sum, r) => sum + r.price, 0);
        const online = filtered.filter(r => r.paymentType === 'Online').reduce((sum, r) => sum + r.price, 0);
        
        // No canteen per category - it's a general total (show 0 for categories)
        const canteenForCat = 0;
        
        // Calculate expenses for this category
        const expensesForCat = filtered.reduce((sum, room) => {
          return sum + printExpenses
            .filter(exp => exp.room === room.number)
            .reduce((s, exp) => s + (exp.amount || 0), 0);
        }, 0);
        
        // Category net balance: Row Total - Expenses (canteen will be added separately)
        const catRowTotal = cash + online; // This is the Row Total for this category
        const catNetBalance = catRowTotal - expensesForCat;
        
        // Show expenses as negative in summary for clarity
        const expenseDisplaySummary = expensesForCat > 0 ? `-${expensesForCat}` : '0';
        
        html += `<tr><td>${cat}</td><td>${cash || 0}</td><td>${online || 0}</td><td>${canteenForCat}</td><td>${expenseDisplaySummary}</td><td><strong>${catNetBalance}</strong></td></tr>`;
        
        // Add to summary totals
        summaryTotalCash += cash;
        summaryTotalOnline += online;
        summaryTotalCanteen += canteenForCat;
        summaryTotalExpense += expensesForCat;
      }
    });
    
    // Total canteen bill row (general total)
    const summaryTotalCanteenBill = printCanteenBills.reduce((sum, bill) => sum + (bill.amount || 0), 0);
    
    if (summaryTotalCanteenBill > 0) {
      html += `<tr style='font-weight:bold;background:#e9f5e9;'><td><b>Total Canteen Bill</b></td><td>0</td><td>0</td><td><b>${summaryTotalCanteenBill}</b></td><td>0</td><td><b>${summaryTotalCanteenBill}</b></td></tr>`;
      summaryTotalCanteen = summaryTotalCanteenBill; // Set the total canteen amount
    }
    
    
    // Grand Total row: Row Total + Canteen Bills - Room-specific Expenses only
    const summaryRowTotal = summaryTotalCash + summaryTotalOnline;
    const summaryGrandTotal = summaryRowTotal + summaryTotalCanteen - summaryTotalExpense;
    
    html += `<tr style='font-weight:bold; background:#f0f0f0; border-top: 2px solid #333;'><td><b>TOTALS</b></td><td><b>${summaryTotalCash}</b></td><td><b>${summaryTotalOnline}</b></td><td><b>${summaryTotalCanteen}</b></td><td><b>${summaryTotalExpense}</b></td><td style='font-size:16px;'><b>${summaryGrandTotal}</b></td></tr>`;
    
    // General expenses row (subtract from totals)
    const summaryGeneralExpenses = printExpenses
      .filter(exp => !exp.room || exp.room === '')
      .reduce((sum, exp) => sum + (exp.amount || 0), 0);
    
    if (summaryGeneralExpenses > 0) {
      html += `<tr style='font-weight:bold;background:#f5e9e9;'><td><b>General Expenses</b></td><td>0</td><td>0</td><td>0</td><td><b>-${summaryGeneralExpenses}</b></td><td><b>-${summaryGeneralExpenses}</b></td></tr>`;
    }
    
    // Calculate final net collection balance after subtracting general expenses
    const finalNetBalance = summaryGrandTotal - summaryGeneralExpenses;
    
    // Net balance explanation row
    html += `<tr style='background:#d4edda; font-weight:bold;'><td colspan='5'><b>NET COLLECTION BALANCE</b></td><td style='font-size:18px;'><b>₹${finalNetBalance}</b></td></tr>`;
    
    // Outstanding Balance row
    const outstandingBalance = Number(localStorage.getItem('outstandingBalance')) || 0;
    html += `<tr style='font-weight:bold;background:#e0e0e0;'><td>O.B</td><td colspan='5'><b>${outstandingBalance}</b></td></tr>`;
    
    // Total OB row
    html += `<tr style='font-weight:bold;background:#d0ffd0;'><td>T.C.B</td><td colspan='5'><b>${finalNetBalance + outstandingBalance}</b></td></tr>`;
    
    html += '</tbody></table>';
    html += '</body></html>';
    
    // Show options modal for print or download image
    showPrintOptionsModal(html, 'Accounts');
  }
  
  const storedRooms = localStorage.getItem('hotelRooms');
  if (storedRooms) {
    rooms = JSON.parse(storedRooms);
    renderRoomTable();
    renderUpcomingCheckinsTable();
    updateTotalCollection();
  } else {
    // Initialize empty tables
    renderRoomTable();
    renderUpcomingCheckinsTable();
  }
  const storedExpenses = localStorage.getItem('hotelExpenses');
  if (storedExpenses) {
    expenses = JSON.parse(storedExpenses);
    renderExpenseTable();
    updateTotalExpense();
    renderCategoryCollectionTable();
  }
  const storedFoodBills = localStorage.getItem('hotelFoodBills');
  if (storedFoodBills) {
    foodBills = JSON.parse(storedFoodBills);
    renderFoodBillTable && renderFoodBillTable();
  }
  const storedCanteenBills = localStorage.getItem('hotelCanteenBills');
  if (storedCanteenBills) {
    canteenBills = JSON.parse(storedCanteenBills);
  } else {
    canteenBills = [];
  }
  renderCanteenBillTable();

if (canteenBillForm) {
  canteenBillForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const room = canteenBillRoomInput.value.trim();
    const amount = Number(canteenBillAmountInput.value);
    if (!room || !amount || amount <= 0) {
      canteenBillRoomInput.focus();
      return;
    }
    canteenBills.push({ room, amount });
    localStorage.setItem('hotelCanteenBills', JSON.stringify(canteenBills));
    renderCanteenBillTable();
    renderCategoryCollectionTable();
    canteenBillForm.reset();
  });
}
// Print logic for Room Booking and Summary tables
document.getElementById('clearStorage').addEventListener('click', function() {
  if (confirm('Are you sure you want to clear historical data (checked-out rooms, expenses, and bills)? Upcoming check-ins will be preserved. This cannot be undone.')) {
    // Get current rooms data
    const storedRooms = localStorage.getItem('hotelRooms');
    if (storedRooms) {
      const currentRooms = JSON.parse(storedRooms);
      
      // Filter out checked-out rooms but preserve future bookings
      const activeRooms = currentRooms.filter(room => {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        
        // Check if this is a future booking
        const checkInDate = new Date(room.checkIn);
        const isFutureBooking = checkInDate > currentDate;
        
        // Keep future bookings regardless of status
        if (isFutureBooking) {
          return true;
        }
        
        // For current/past bookings, only keep active ones
        const statusInfo = getCheckoutStatus(room, room.checkOut ? new Date(room.checkOut) : new Date(room.checkIn).getTime() + (room.numDays * 24 * 60 * 60 * 1000));
        return statusInfo.status !== 'Checked Out';
      });
      
      // Update global rooms array
      rooms = activeRooms;
      
      // Update localStorage with only active rooms
      localStorage.setItem('hotelRooms', JSON.stringify(activeRooms));
      
      // Clear all expenses and canteen bills from localStorage
      localStorage.removeItem('hotelExpenses');
      localStorage.removeItem('hotelCanteenBills');
      
      // Reset global arrays
      expenses = [];
      canteenBills = [];
    }
    
    // Always re-render all tables and update collections (even if no rooms)
    renderRoomTable();
    renderUpcomingCheckinsTable();
    renderExpenseTable && renderExpenseTable();
    renderCanteenBillTable && renderCanteenBillTable();
    renderCategoryCollectionTable && renderCategoryCollectionTable();
    updateTotalCollection && updateTotalCollection();
    updateTotalExpense && updateTotalExpense();
    renderFoodBillTable && renderFoodBillTable();
  }
});
document.getElementById('printAll').addEventListener('click', function() {
  const tables = document.querySelectorAll('table');
  function getTableWithoutDelete(table) {
    const clone = table.cloneNode(true);
    // Remove Delete header, but keep Expense column in first table
    const ths = clone.querySelectorAll('th');
    ths.forEach((th, idx) => {
      const isFirstTable = clone.parentNode && clone.parentNode.querySelectorAll('table')[0] === clone;
      if ((th.textContent.trim().toLowerCase() === 'delete' || th.textContent.trim().toLowerCase() === 'action' || th.textContent.trim().toLowerCase().includes('actions')) && !(idx === 6 && isFirstTable)) {
        th.parentNode.removeChild(th);
        // Remove corresponding td in all rows
        clone.querySelectorAll('tr').forEach(tr => {
          if (tr.children[idx]) tr.removeChild(tr.children[idx]);
        });
      }
    });
    // Remove delete buttons if any
    clone.querySelectorAll('.delete-room-btn, .delete-canteen-btn, .delete-expense-btn').forEach(btn => btn.remove());
    return clone.outerHTML;
  }
  const win = window.open('', '', 'width=900,height=700');
  win.document.write('<html><head><title>Room Bookings & Summary</title>');
  win.document.write('<link rel="stylesheet" href="hotel-management.css">');
  win.document.write('<style>table { width: 100%; border-collapse: collapse; border: 2px solid #333; } th, td { padding: 8px 16px; text-align: center; border: 1px solid #333; } th { background: #f0f0f0; font-weight: bold; } </style>');
  win.document.write('</head><body>');
  win.document.write('<h2 style="text-align:center;">Room Bookings</h2>');
  win.document.write(getTableWithoutDelete(tables[0]));
  win.document.write('<h2 style="text-align:center;">Summary</h2>');
  win.document.write(getTableWithoutDelete(tables[tables.length - 1]));
  win.document.write('</body></html>');
  win.document.close();
  win.print();
});

document.getElementById('printSummary').addEventListener('click', function() {
  const tables = document.querySelectorAll('table');
  const summaryTable = tables[tables.length - 1];
  function getTableWithoutDelete(table) {
    const clone = table.cloneNode(true);
    // Remove Delete header
    const ths = clone.querySelectorAll('th');
    ths.forEach((th, idx) => {
      if (th.textContent.trim().toLowerCase() === 'delete' || th.textContent.trim().toLowerCase() === 'action') {
        th.parentNode.removeChild(th);
        // Remove corresponding td in all rows
        clone.querySelectorAll('tr').forEach(tr => {
          if (tr.children[idx]) tr.removeChild(tr.children[idx]);
        });
      }
    });
    // Remove delete buttons if any
    clone.querySelectorAll('.delete-room-btn, .delete-canteen-btn, .delete-expense-btn').forEach(btn => btn.remove());
    return clone.outerHTML;
  }
  const win = window.open('', '', 'width=900,height=700');
  win.document.write('<html><head><title>Summary</title>');
  win.document.write('<link rel="stylesheet" href="hotel-management.css">');
  win.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { padding: 8px 16px; text-align: center; } th { background: #f0f0f0; font-weight: bold; } </style>');
  win.document.write('</head><body>');
  win.document.write('<h2 style="text-align:center;">Summary</h2>');
  win.document.write(getTableWithoutDelete(summaryTable));
  win.document.write('</body></html>');
  win.document.close();
  win.print();
});
});

categorySelect.addEventListener('change', function() {
  const selected = categorySelect.value;
  if (selected && categoryPrices[selected]) {
    // Prefill the price for predefined categories
    roomPriceInput.value = categoryPrices[selected];
  } else if (selected === 'Other') {
    // Clear the price for "Other" category
    roomPriceInput.value = '';
  } else {
    // Clear the price if no category selected
    roomPriceInput.value = '';
  }
});

// Function to check if room is already allocated
function isRoomAlreadyAllocated(roomNumber, checkInDate, checkOutDate, excludeIndex = -1) {
  return rooms.some((room, index) => {
    // Skip the current room being edited
    if (index === excludeIndex) return false;
    
    // Check if room number matches
    if (room.number !== roomNumber) return false;
    
    // Convert dates for comparison
    const existingCheckIn = new Date(room.checkIn);
    const existingCheckOut = room.checkOut ? new Date(room.checkOut) : null;
    const newCheckIn = new Date(checkInDate);
    const newCheckOut = checkOutDate ? new Date(checkOutDate) : null;
    const currentDate = new Date();
    
    // If existing booking has checkout date and it's in the past, room is available
    if (existingCheckOut && existingCheckOut <= currentDate) {
      return false; // Room is available as previous guest has checked out
    }
    
    // If existing booking has no checkout, consider it as ongoing
    if (!existingCheckOut) {
      return true; // Room is still occupied
    }
    
    // If new booking has no checkout, check if it conflicts with existing checkin
    if (!newCheckOut) {
      return newCheckIn < existingCheckOut;
    }
    
    // Check for date overlap (both bookings have checkout dates)
    return (newCheckIn < existingCheckOut && newCheckOut > existingCheckIn);
  });
}

// Function to show error message
function showErrorMessage(message, inputElement = null) {
  // Remove existing error messages
  const existingError = document.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Create error message element
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style = 'background: #f8d7da; color: #721c24; padding: 12px 16px; border: 1px solid #f5c6cb; border-radius: 6px; margin: 10px 0; font-weight: bold; display: flex; align-items: center; gap: 8px;';
  errorDiv.innerHTML = `<span style="font-size: 18px;">⚠️</span> ${message}`;
  
  // Insert error message after the form
  const roomForm = document.getElementById('roomForm');
  roomForm.parentNode.insertBefore(errorDiv, roomForm.nextSibling);
  
  // Focus on the problematic input
  if (inputElement) {
    inputElement.focus();
    inputElement.style.borderColor = '#dc3545';
    setTimeout(() => {
      inputElement.style.borderColor = '';
    }, 3000);
  }
  
  // Auto-remove error after 5 seconds
  setTimeout(() => {
    if (errorDiv && errorDiv.parentNode) {
      errorDiv.remove();
    }
  }, 5000);
}

roomForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const category = categorySelect.value;
  if (!category) return;
  
  const price = roomPriceInput.value;
  if (!price || price <= 0) {
    roomPriceInput.focus();
    return;
  }
  const name = guestNameInput.value.trim();
  if (!name) {
    guestNameInput.focus();
    return;
  }
  const address = document.getElementById('guestAddress').value.trim() || '';
  const mobile = document.getElementById('guestMobile').value.trim() || '';
  const number = roomNumberInput.value.trim();
  
  const checkIn = checkInTimeInput.value;
  if (!checkIn) {
    checkInTimeInput.focus();
    return;
  }
  
  // Check if this is a future booking
  const currentDate = new Date();
  const checkInDate = new Date(checkIn);
  const isFutureBooking = checkInDate > currentDate;
  
  // For current/past bookings, room number is required
  if (!isFutureBooking && !number) {
    showErrorMessage('Room number is required for current/immediate bookings.', roomNumberInput);
    roomNumberInput.focus();
    return;
  }
  
  const checkOut = checkOutTimeInput.value;
  
  // Check room allocation only for current bookings with room numbers
  if (!isFutureBooking && number && !checkOut && isRoomAlreadyAllocated(number, checkIn, checkOut)) {
    const existingGuest = rooms.find(room => room.number === number);
    showErrorMessage(
      `Room ${number} is already allocated to "${existingGuest.name}" from ${formatDate(existingGuest.checkIn)} ${existingGuest.checkOut ? 'to ' + formatDate(existingGuest.checkOut) : '(ongoing)'}. Please choose a different room or check the dates.`,
      roomNumberInput
    );
    return;
  }
  // checkOut is now optional, so no validation
  const paymentType = paymentTypeSelect.value;
  if (!paymentType) {
    paymentTypeSelect.focus();
    return;
  }
  const bookingSource = bookingSourceSelect.value;
  if (!bookingSource) {
    bookingSourceSelect.focus();
    return;
  }
  const advancePaid = Number(advancePaidInput.value) || 0;
  const numPerson = Number(document.getElementById('numPerson').value) || 0;
  
  // For future bookings without room number, use placeholder
  const roomNumber = number || (isFutureBooking ? 'TBD' : '');

  const startingRegNo = localStorage.getItem('hotelStartingRegNo');

  const regNo = startingRegNo ? String(Number(startingRegNo) + 1).padStart(4, '0') : '0001';
  localStorage.setItem('hotelStartingRegNo', regNo);

  rooms.push({ regNo, name, number: roomNumber, checkIn, checkOut, advancePaid, numPerson, category, price: Number(price), paymentType, bookingSource, address, mobile });
  // Save to localStorage
  localStorage.setItem('hotelRooms', JSON.stringify(rooms));
  renderRoomTable();
  renderUpcomingCheckinsTable();
  updateTotalCollection();
  roomForm.reset();
  categorySelect.value = '';
  guestNameInput.value = '';
  document.getElementById('guestAddress').value = '';
  document.getElementById('guestMobile').value = '';
  roomNumberInput.value = '';
  checkInTimeInput.value = '';
  checkOutTimeInput.value = '';
  paymentTypeSelect.value = '';
  bookingSourceSelect.value = '';
  roomPriceInput.value = '';
  advancePaidInput.value = '';
});

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatDateTime(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  let hour = d.getHours();
  const min = String(d.getMinutes()).padStart(2, '0');
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12; // 0 should be 12
  hour = String(hour).padStart(2, '0');
  return `${day}/${month}/${year} ${hour}:${min} ${ampm}`;
}

// Convert DD/MM/YYYY HH:MM to ISO format for storage
function parseCustomDateTime(dateTimeStr) {
  if (!dateTimeStr) return '';
  
  // Handle DD/MM/YYYY HH:MM format
  const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})$/;
  const match = dateTimeStr.match(regex);
  
  if (match) {
    const [, day, month, year, hour, minute] = match;
    const d = new Date(year, month - 1, day, hour, minute);
    return d.toISOString();
  }
  
  return '';
}

// Convert ISO format to DD/MM/YYYY HH:MM for display in input fields
function formatCustomDateTime(isoDateStr) {
  if (!isoDateStr) return '';
  
  const d = new Date(isoDateStr);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hour = String(d.getHours()).padStart(2, '0');
  const minute = String(d.getMinutes()).padStart(2, '0');
  
  return `${day}/${month}/${year} ${hour}:${minute}`;
}

// Convert ISO format to datetime-local format (YYYY-MM-DDTHH:MM) for datetime-local inputs
function formatDateTimeLocal(isoDateStr) {
  if (!isoDateStr) return '';
  
  const d = new Date(isoDateStr);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hour = String(d.getHours()).padStart(2, '0');
  const minute = String(d.getMinutes()).padStart(2, '0');
  
  return `${year}-${month}-${day}T${hour}:${minute}`;
}

// Function to determine checkout status
function getCheckoutStatus(room, calculatedCheckoutDate) {
  const currentDate = new Date();
  const checkInDate = new Date(room.checkIn);
  
  // If check-in date is in the future
  if (checkInDate > currentDate) {
    return {
      status: 'Check In',
      datetime: formatDateTime(room.checkIn),
      color: '#28a745', // Green
      bgColor: '#d4edda'
    };
  }
  
  // If there's an actual checkout date recorded
  if (room.checkOut) {
    const actualCheckoutDate = new Date(room.checkOut);
    if (actualCheckoutDate <= currentDate) {
      return {
        status: 'Checked Out',
        datetime: formatDateTime(room.checkOut),
        color: '#6c757d', // Gray
        bgColor: '#f8f9fa'
      };
    } else {
      return {
        status: 'Will Checkout',
        datetime: formatDateTime(room.checkOut),
        color: '#17a2b8', // Blue
        bgColor: '#d1ecf1'
      };
    }
  }
  
  // If there's a calculated checkout date based on advance payment
  if (calculatedCheckoutDate) {
    const calcCheckoutDate = new Date(calculatedCheckoutDate);
    if (calcCheckoutDate <= currentDate) {
      return {
        status: 'Should Checkout',
        datetime: formatDateTime(calculatedCheckoutDate),
        color: '#fd7e14', // Orange
        bgColor: '#fff3cd'
      };
    } else {
      return {
        status: 'Expected Out',
        datetime: formatDateTime(calculatedCheckoutDate),
        color: '#6f42c1', // Purple
        bgColor: '#e2d9f3'
      };
    }
  }
  
  // Guest is currently staying
  return {
    status: 'Still In',
    datetime: null,
    color: '#dc3545', // Red
    bgColor: '#f8d7da'
  };
}

function renderTariffHistory(room) {
  const historyTableBody = document.getElementById('tariffHistoryTableBody');
  if (!historyTableBody) return;
  
  historyTableBody.innerHTML = '';
  
  // If no tariff history, show initial booking only
  if (!room.tariffHistory || room.tariffHistory.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="padding:8px;border-right:1px solid #ddd;">${formatDateTime(room.checkIn)}</td>
      <td style="padding:8px;text-align:center;border-right:1px solid #ddd;">₹${room.price || 0}</td>
      <td style="padding:8px;text-align:center;border-right:1px solid #ddd;">${room.category || 'N/A'}</td>
      <td style="padding:8px;text-align:center;">
        <span style="background:#28a745;color:white;padding:2px 8px;border-radius:12px;font-size:11px;">Original</span>
      </td>
    `;
    historyTableBody.appendChild(row);
    return;
  }
  
  // Sort tariff history by date
  const sortedHistory = [...room.tariffHistory].sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
  const now = new Date();
  
  sortedHistory.forEach((tariffEntry, index) => {
    const row = document.createElement('tr');
    const entryDate = new Date(tariffEntry.fromDate);
    const isActive = entryDate <= now && (index === sortedHistory.length - 1 || new Date(sortedHistory[index + 1]?.fromDate) > now);
    const isFuture = entryDate > now;
    
    let statusBadge = '';
    let rowStyle = '';
    
    if (index === 0) {
      statusBadge = '<span style="background:#28a745;color:white;padding:2px 8px;border-radius:12px;font-size:11px;">Original</span>';
    } else if (isActive) {
      statusBadge = '<span style="background:#007bff;color:white;padding:2px 8px;border-radius:12px;font-size:11px;">Current</span>';
      rowStyle = 'background:#e3f2fd;';
    } else if (isFuture) {
      statusBadge = '<span style="background:#ff9800;color:white;padding:2px 8px;border-radius:12px;font-size:11px;">Scheduled</span>';
      rowStyle = 'background:#fff3e0;';
    } else {
      statusBadge = '<span style="background:#6c757d;color:white;padding:2px 8px;border-radius:12px;font-size:11px;">Past</span>';
      rowStyle = 'background:#f8f9fa;';
    }
    
    row.style.cssText = rowStyle;
    row.innerHTML = `
      <td style="padding:8px;border-right:1px solid #ddd;">${formatDateTime(tariffEntry.fromDate)}</td>
      <td style="padding:8px;text-align:center;border-right:1px solid #ddd;">₹${tariffEntry.tariff || 0}</td>
      <td style="padding:8px;text-align:center;border-right:1px solid #ddd;">${tariffEntry.category || room.category || 'N/A'}</td>
      <td style="padding:8px;text-align:center;">${statusBadge}</td>
    `;
    historyTableBody.appendChild(row);
  });
  
  // Add a summary row if there are multiple entries
  if (sortedHistory.length > 1) {
    const summaryRow = document.createElement('tr');
    summaryRow.style.cssText = 'border-top:2px solid #333;font-weight:bold;background:#f0f8ff;';
    const currentTariff = getCurrentEffectiveTariff(room);
    summaryRow.innerHTML = `
      <td style="padding:8px;border-right:1px solid #ddd;"><strong>Current Effective Rate</strong></td>
      <td style="padding:8px;text-align:center;border-right:1px solid #ddd;"><strong>₹${currentTariff}</strong></td>
      <td style="padding:8px;text-align:center;border-right:1px solid #ddd;"><strong>${room.category || 'N/A'}</strong></td>
      <td style="padding:8px;text-align:center;"><strong>📊 Live</strong></td>
    `;
    historyTableBody.appendChild(summaryRow);
  }
}

function getCurrentEffectiveTariff(room) {
  // If no upgrade history, return the room price
  if (!room.tariffHistory || room.tariffHistory.length === 0) {
    return room.price || 0;
  }
  
  // If only one entry in history, return that tariff
  if (room.tariffHistory.length === 1) {
    return room.tariffHistory[0].tariff || room.price || 0;
  }
  
  const now = new Date();
  let effectiveTariff = null;
  
  // Find the most recent tariff that applies to today
  // Sort by fromDate to ensure proper chronological order
  const sortedHistory = [...room.tariffHistory].sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
  
  for (let i = 0; i < sortedHistory.length; i++) {
    const tariffPeriod = sortedHistory[i];
    const periodDate = new Date(tariffPeriod.fromDate);
    
    if (periodDate <= now) {
      effectiveTariff = tariffPeriod.tariff;
    } else {
      break; // Stop at first future tariff
    }
  }
  
  // If no tariff period applies yet (all are in the future), use the first one or room.price
  return effectiveTariff !== null ? effectiveTariff : (sortedHistory[0]?.tariff || room.price || 0);
}

function renderUpcomingCheckinsTable() {
  upcomingCheckinTableBody.innerHTML = '';
  
  // Filter rooms that have future check-in dates (status 'Check In')
  const upcomingRooms = rooms.filter((room, idx) => {
    const currentDate = new Date();
    const checkInDate = new Date(room.checkIn);
    return checkInDate > currentDate; // Future check-ins only
  });
  
  if (upcomingRooms.length === 0) {
    upcomingCheckinTableBody.innerHTML = '<tr class="empty-row"><td colspan="12">No upcoming check-ins.</td></tr>';
    return;
  }
  
  // Sort by check-in date (earliest first)
  upcomingRooms.sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn));
  
  upcomingRooms.forEach((room, index) => {
    // Find the original index in the rooms array for proper data-index
    const originalIndex = rooms.findIndex(r => 
      r.name === room.name && 
      r.checkIn === room.checkIn && 
      r.number === room.number
    );
    
    const tr = document.createElement('tr');
    
    // Calculate days
    const checkInDate = new Date(room.checkIn);
    const checkOutDate = room.checkOut ? new Date(room.checkOut) : 
      new Date(checkInDate.getTime() + (room.numDays || 1) * 24 * 60 * 60 * 1000);
    const numDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
    // Calculate total amount
    const totalAmount = room.totalAmountOverride !== null && room.totalAmountOverride !== undefined 
      ? room.totalAmountOverride 
      : calculateTotalWithUpgrade(room);
    
  // Format check-in date and time (split date and time with AM/PM)
  const checkInDateTime = formatDateTime(room.checkIn);
  // formatDateTime returns 'DD/MM/YYYY HH:MM AM/PM', so split accordingly
  const dateTimeParts = checkInDateTime.split(' ');
  const checkInDatePart = dateTimeParts[0];
  const checkInTimePart = dateTimeParts[1] + ' ' + dateTimeParts[2];
    
    // Payment type display
    const paymentTypeColor = room.paymentType === 'Cash' ? '#28a745' : '#007bff';
    const tariffDisplay = `<span style="color: ${paymentTypeColor}; font-weight: bold;">₹${room.price}</span>`;
    
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${room.name}</td>
      <td>${room.numPerson || '-'}</td>
      <td>${checkInDatePart}</td>
      <td>${checkInTimePart}</td>
      <td>${room.number}</td>
      <td>${room.category || '-'}</td>
      <td>${tariffDisplay}</td>
      <td>₹${room.advancePaid || 0}</td>
      <td>${numDays}</td>
      <td>₹${totalAmount.toFixed(2)}</td>
      <td>
        <button class='checkin-now-btn' data-index='${originalIndex}' style='background:#ff6b35;color:#fff;border:none;border-radius:4px;padding:6px 12px;cursor:pointer;margin:2px;font-size:12px;font-weight:bold;'>Check In Now</button><br>
        <button class='delete-upcoming-btn' data-index='${originalIndex}' style='background:#b30000;color:#fff;border:none;border-radius:4px;padding:6px 12px;cursor:pointer;margin:2px;font-size:12px;font-weight:bold;'>Delete</button>
      </td>
    `;
    
    // Add styling for future check-ins
    tr.style.backgroundColor = '#d4edda';
    tr.style.borderLeft = '4px solid #28a745';
    
    upcomingCheckinTableBody.appendChild(tr);
  });
}

function renderRoomTable() {
  roomTableBody.innerHTML = '';
  
  // Filter out future check-ins for this table
  const currentDate = new Date();
  const currentRooms = rooms.filter(room => {
    const checkInDate = new Date(room.checkIn);
    return checkInDate <= currentDate;
  });
  
  if (currentRooms.length === 0) {
    roomTableBody.innerHTML = '<tr class="empty-row"><td colspan="13">No current bookings. Future bookings appear in "Upcoming Check-Ins" table.</td></tr>';
    renderCategoryCollectionTable();
    return;
  }
  
  let totalCash = 0;
  let totalOnline = 0;
  let totalDays = 0;
  let totalPersons = 0;
  let totalAdvance = 0;
  
  currentRooms.forEach((room, currentIdx) => {
    // Find the original index in the full rooms array for proper data-index
    const idx = rooms.findIndex(r => 
      r.name === room.name && 
      r.checkIn === room.checkIn && 
      r.number === room.number
    );
    
    // Use room.price directly (tariff history only for upgrades)
    const roomTariff = Number(room.price) || 0;
    
    // Show tariff value in the appropriate column based on payment type
    // If payment is Cash, show tariff in Cash column; if Online, show in Online column
    const cashValue = room.paymentType === 'Cash' ? roomTariff : 0;
    const onlineValue = room.paymentType === 'Online' ? roomTariff : 0;
    
    // Add to totals
    totalCash += cashValue;
    totalOnline += onlineValue;
    totalPersons += (room.numPerson || 0);
    totalAdvance += (room.advancePaid || 0);
    
    let numDays = '';
    let checkoutDate = room.checkOut;
    
    // Calculate actual number of days based on check-in date and checkout date (or today)
    if (room.checkIn) {
      const checkInDate = new Date(room.checkIn);
      let endDate = room.checkOut ? new Date(room.checkOut) : new Date(); // Use checkout date if available, otherwise today
      // If current time is after 10:00 am, count next day
      if (!room.checkOut) {
        if (endDate.getHours() > 10 || (endDate.getHours() === 10 && endDate.getMinutes() > 0)) {
          endDate.setDate(endDate.getDate() + 1);
          endDate.setHours(10, 0, 0, 0);
        } else {
          endDate.setHours(10, 0, 0, 0);
        }
      }
      // Calculate the difference in days
      const timeDifference = endDate.getTime() - checkInDate.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
      // Ensure minimum of 1 day if the dates are the same or check-in is today
      numDays = Math.max(daysDifference, 1);
      totalDays += numDays;
    }
    
    // If no actual checkout date but we have calculated days based on advance payment, use that for checkout prediction
    if (!room.checkOut && room.advancePaid) {
      const paidValue = onlineValue || cashValue;
      if (paidValue) {
        const advanceDays = Math.floor(room.advancePaid / paidValue);
        const inDate = new Date(room.checkIn);
        inDate.setDate(inDate.getDate() + advanceDays);
        checkoutDate = inDate.toISOString();
      }
    }
    const tr = document.createElement('tr');
    const advanceDisplay = room.advancePaid === 0 ? 'DUE' : room.advancePaid;
    
    // Get checkout status
    const statusInfo = getCheckoutStatus(room, checkoutDate);
    
    // Apply row background color based on status
    tr.style.backgroundColor = statusInfo.bgColor;
    
    // Show checkout date if it has been entered
    let checkoutDateCell = '-';
    if (room.checkOut) {
      checkoutDateCell = formatDateTime(room.checkOut);
    }
    
    // Simple status text without colored badge
    const statusCell = `<div style="text-align: center; font-weight: bold; color: ${statusInfo.color};">${statusInfo.status}</div>`;
    
  // Calculate total amount: Number of Days × Tariff
  const calculatedAmount = numDays * roomTariff;
  const totalAmount = room.totalAmountOverride !== null && room.totalAmountOverride !== undefined 
    ? room.totalAmountOverride 
    : calculatedAmount;

  tr.innerHTML = `<td>${idx + 1}</td><td>${room.regNo}</td><td>${room.name}</td><td>${room.numPerson ? room.numPerson : '-'}</td><td>${formatDateTime(room.checkIn)}</td><td>${checkoutDateCell}</td><td>${room.number}</td><td>${cashValue}</td><td>${onlineValue}</td><td>${advanceDisplay}</td><td>${numDays}</td><td>${statusCell}</td><td>₹${totalAmount.toFixed(2)}</td><td>
    <button class='edit-room-btn' data-index='${idx}' style='background:#007bff;color:#fff;border:none;border-radius:4px;padding:6px 12px;cursor:pointer;margin:2px;font-size:12px;font-weight:bold;'>Edit</button>
    <button class='delete-room-btn' data-index='${idx}' style='background:#b30000;color:#fff;border:none;border-radius:4px;padding:6px 12px;cursor:pointer;margin:2px;font-size:12px;font-weight:bold;'>Delete</button><br>
    <button class='bill-btn' data-index='${idx}' style='background:#28a745;color:#fff;border:none;border-radius:4px;padding:6px 12px;cursor:pointer;margin:2px;font-size:12px;font-weight:bold;'>Bill</button>
  </td>`;
  
  // Add the row to the table first
  roomTableBody.appendChild(tr);
  
  // Add event listener for the edit button of this specific row
  const editBtn = tr.querySelector('.edit-room-btn');
  if (editBtn) {
    editBtn.addEventListener('click', function() {
      const idx = parseInt(editBtn.getAttribute('data-index'));
      // Fill modal fields
      document.getElementById('editModalName').value = rooms[idx].name;
      document.getElementById('editModalNumber').value = rooms[idx].number;
      document.getElementById('editModalCheckIn').value = formatDateTimeLocal(rooms[idx].checkIn);
      document.getElementById('editModalCheckOut').value = formatDateTimeLocal(rooms[idx].checkOut);
      document.getElementById('editModalAdvance').value = rooms[idx].advancePaid;
      document.getElementById('editModalNumPerson').value = rooms[idx].numPerson;
      document.getElementById('editModalTariff').value = rooms[idx].price;
      document.getElementById('editModalPaymentType').value = rooms[idx].paymentType;
      document.getElementById('editModalCategory').value = rooms[idx].category;
      document.getElementById('editModalBookingSource').value = rooms[idx].bookingSource;
      document.getElementById('editModalAddress').value = rooms[idx].address || '';
      document.getElementById('editModalMobile').value = rooms[idx].mobile || '';
      
      // Populate total amount override if it exists
      document.getElementById('editModalTotalAmount').value = rooms[idx].totalAmountOverride || '';
      
      // Populate tariff history
      renderTariffHistory(rooms[idx]);
      
      editModal.style.display = 'block';
      
      // Add event listener for "Set Now" button
      const setCurrentCheckoutBtn = document.getElementById('setCurrentCheckout');
      const setCurrentHandler = function() {
        const now = new Date();
        const dd = String(now.getDate()).padStart(2, '0');
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const yyyy = now.getFullYear();
        const hh = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        const formattedDateTime = `${dd}/${mm}/${yyyy} ${hh}:${min}`;
        document.getElementById('editModalCheckOut').value = formatDateTimeLocal(new Date().toISOString());
        
        // Visual feedback
        const checkoutField = document.getElementById('editModalCheckOut');
        checkoutField.style.borderColor = '#28a745';
        checkoutField.style.backgroundColor = '#d4edda';
        setTimeout(() => {
          checkoutField.style.borderColor = '#ccc';
          checkoutField.style.backgroundColor = '#f9f9f9';
        }, 1500);
      };
      setCurrentCheckoutBtn.removeEventListener('click', setCurrentHandler);
      setCurrentCheckoutBtn.addEventListener('click', setCurrentHandler);
      
      // Add event listener for "Clear" button
      const clearCheckoutBtn = document.getElementById('clearCheckout');
      const clearHandler = function() {
        document.getElementById('editModalCheckOut').value = '';
        
        // Visual feedback
        const checkoutField = document.getElementById('editModalCheckOut');
        checkoutField.style.borderColor = '#dc3545';
        checkoutField.style.backgroundColor = '#f8d7da';
        setTimeout(() => {
          checkoutField.style.borderColor = '#ccc';
          checkoutField.style.backgroundColor = '#f9f9f9';
        }, 1500);
      };
      clearCheckoutBtn.removeEventListener('click', clearHandler);
      clearCheckoutBtn.addEventListener('click', clearHandler);
      
      // Add event listener for "Upgrade Room" button
      const upgradeBtn = document.getElementById('upgradeRoom');
      const upgradeHandler = function() {
        currentRoomIndexForUpgrade = idx;
        showUpgradeModal();
      };
      upgradeBtn.removeEventListener('click', upgradeHandler);
      upgradeBtn.addEventListener('click', upgradeHandler);
      
      // Add event listener for category change to prefill tariff
      const categorySelect = document.getElementById('editModalCategory');
      const tariffInput = document.getElementById('editModalTariff');
      const categoryChangeHandler = function() {
        const selectedCategory = this.value;
        if (selectedCategory && categoryPrices[selectedCategory]) {
          tariffInput.value = categoryPrices[selectedCategory];
        } else if (selectedCategory === 'Other') {
          tariffInput.value = '';
        }
      };
      categorySelect.removeEventListener('change', categoryChangeHandler);
      categorySelect.addEventListener('change', categoryChangeHandler);
      
      // Save handler
      const saveHandler = function(e) {
        e.preventDefault();
        
        const newRoomNumber = document.getElementById('editModalNumber').value;
        const newCheckIn = document.getElementById('editModalCheckIn').value ? new Date(document.getElementById('editModalCheckIn').value).toISOString() : '';
        const newCheckOut = document.getElementById('editModalCheckOut').value ? new Date(document.getElementById('editModalCheckOut').value).toISOString() : '';
        
        // Check if room is already allocated (excluding current booking, only if no checkout date is provided)
        if (!newCheckOut && isRoomAlreadyAllocated(newRoomNumber, newCheckIn, newCheckOut, idx)) {
          const existingGuest = rooms.find((room, index) => 
            room.number === newRoomNumber && index !== idx
          );
          
          // Show error in modal
          let existingError = document.querySelector('#editRoomModalContent .error-message');
          if (existingError) {
            existingError.remove();
          }
          
          const errorDiv = document.createElement('div');
          errorDiv.className = 'error-message';
          errorDiv.style = 'background: #f8d7da; color: #721c24; padding: 12px 16px; border: 1px solid #f5c6cb; border-radius: 6px; margin: 10px 0; font-weight: bold; display: flex; align-items: center; gap: 8px;';
          errorDiv.innerHTML = `<span style="font-size: 18px;">⚠️</span> Room ${newRoomNumber} is already allocated to "${existingGuest.name}" from ${formatDate(existingGuest.checkIn)} ${existingGuest.checkOut ? 'to ' + formatDate(existingGuest.checkOut) : '(ongoing)'}. Please choose a different room or check the dates.`;
          
          const modalContent = document.getElementById('editRoomModalContent');
          const form = document.getElementById('editRoomForm');
          modalContent.insertBefore(errorDiv, form);
          
          document.getElementById('editModalNumber').focus();
          document.getElementById('editModalNumber').style.borderColor = '#dc3545';
          
          // Auto-remove error after 5 seconds
          setTimeout(() => {
            if (errorDiv && errorDiv.parentNode) {
              errorDiv.remove();
            }
            document.getElementById('editModalNumber').style.borderColor = '';
          }, 5000);
          
          return;
        }
        
        rooms[idx].name = document.getElementById('editModalName').value;
        rooms[idx].number = newRoomNumber;
        rooms[idx].checkIn = newCheckIn;
        rooms[idx].checkOut = newCheckOut;
        rooms[idx].advancePaid = Number(document.getElementById('editModalAdvance').value);
        rooms[idx].numPerson = Number(document.getElementById('editModalNumPerson').value);
        const newTariff = Number(document.getElementById('editModalTariff').value);
        const oldTariff = rooms[idx].price;
        
        rooms[idx].price = newTariff;
        
        // Update tariff history if tariff changed
        if (newTariff !== oldTariff) {
          const now = new Date().toISOString();
          
          // Initialize tariff history if it doesn't exist
          if (!rooms[idx].tariffHistory || rooms[idx].tariffHistory.length === 0) {
            rooms[idx].tariffHistory = [{
              fromDate: rooms[idx].checkIn,
              tariff: oldTariff,
              category: rooms[idx].category
            }];
          }
          
          // Add new tariff entry with current date/time for immediate effect
          rooms[idx].tariffHistory.push({
            fromDate: now,
            tariff: newTariff,
            category: rooms[idx].category
          });
          
          // Sort history by date
          rooms[idx].tariffHistory.sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
        }
        
        rooms[idx].paymentType = document.getElementById('editModalPaymentType').value;
        rooms[idx].category = document.getElementById('editModalCategory').value;
        rooms[idx].bookingSource = document.getElementById('editModalBookingSource').value;
        rooms[idx].address = document.getElementById('editModalAddress').value;
        rooms[idx].mobile = document.getElementById('editModalMobile').value;
        
        // Save total amount override (independent of tariff calculation)
        const totalAmountOverride = document.getElementById('editModalTotalAmount').value;
        
        // If tariff changed and no explicit override is set, clear any existing override to recalculate
        if (newTariff !== oldTariff && !totalAmountOverride) {
          rooms[idx].totalAmountOverride = null;
        } else {
          rooms[idx].totalAmountOverride = totalAmountOverride ? Number(totalAmountOverride) : null;
        }
        localStorage.setItem('hotelRooms', JSON.stringify(rooms));
        editModal.style.display = 'none';
        
        // Force table refresh to update tariff columns
        renderRoomTable();
        renderUpcomingCheckinsTable();
        updateTotalCollection();
        
        // Show success feedback if tariff was changed
        if (newTariff !== oldTariff) {
          const editBtn = document.querySelector(`[data-index="${idx}"] .edit-room-btn`);
          if (editBtn) {
            const originalText = editBtn.textContent;
            editBtn.textContent = '✓ Updated';
            editBtn.style.backgroundColor = '#28a745';
            setTimeout(() => {
              editBtn.textContent = originalText;
              editBtn.style.backgroundColor = '#007bff';
            }, 2000);
          }
        }
        
        document.getElementById('editRoomForm').removeEventListener('submit', saveHandler);
      };
      document.getElementById('editRoomForm').addEventListener('submit', saveHandler);
      // Cancel handler
      const cancelBtn = document.getElementById('editModalCancel');
      const cancelHandler = function() {
        editModal.style.display = 'none';
        document.getElementById('editRoomForm').removeEventListener('submit', saveHandler);
        cancelBtn.removeEventListener('click', cancelHandler);
      };
      cancelBtn.addEventListener('click', cancelHandler);
    });
  }
  
  // Event listeners are handled by event delegation at the table level
  });
  
  // Add event listeners for checkout inputs
  const checkoutInputs = roomTableBody.querySelectorAll('.checkout-input');
  checkoutInputs.forEach(input => {
    input.addEventListener('change', function() {
      const idx = parseInt(input.getAttribute('data-idx'));
      rooms[idx].checkOut = input.value;
      localStorage.setItem('hotelRooms', JSON.stringify(rooms));
      renderRoomTable();
    });
  });
  // Add event listeners for days inputs
  const daysInputs = roomTableBody.querySelectorAll('.days-input');
  daysInputs.forEach(input => {
    input.addEventListener('change', function() {
      const idx = parseInt(input.getAttribute('data-idx'));
      const days = parseInt(input.value);
      if (!isNaN(days) && rooms[idx].checkIn) {
        const inDate = new Date(rooms[idx].checkIn);
        inDate.setDate(inDate.getDate() + days);
        // Format for datetime-local
        const yyyy = inDate.getFullYear();
        const mm = String(inDate.getMonth() + 1).padStart(2, '0');
        const dd = String(inDate.getDate()).padStart(2, '0');
        const hh = String(inDate.getHours()).padStart(2, '0');
        const min = String(inDate.getMinutes()).padStart(2, '0');
        rooms[idx].checkOut = `${yyyy}-${mm}-${dd}T${hh}:${min}`;
        localStorage.setItem('hotelRooms', JSON.stringify(rooms));
        renderRoomTable();
      }
    });
  });
  renderCategoryCollectionTable();
}

// Room Upgrade Functions
function showUpgradeModal() {
  const room = rooms[currentRoomIndexForUpgrade];
  if (!room) return;
  
  // Set default upgrade date and time to current datetime for instant effect
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
  document.getElementById('upgradeDate').value = today.toString().slice(0, 16);
  
  // Set minimum datetime to current datetime (can't upgrade for past dates/times)
  document.getElementById('upgradeDate').min = todayStr;
  
  // Set current tariff as default new tariff
  document.getElementById('upgradeNewTariff').value = room.price;
  
  // Set current category as selected option
  const categorySelect = document.getElementById('upgradeNewCategory');
  categorySelect.value = room.category || '';
  
  // Add preview calculation
  const updateUpgradePreview = function() {
    const upgradeDate = document.getElementById('upgradeDate').value;
    const newTariff = parseFloat(document.getElementById('upgradeNewTariff').value);
    
    if (!upgradeDate || !newTariff || newTariff <= 0) {
      document.getElementById('upgradePreview').style.display = 'none';
      return;
    }
    
    // Calculate current total using latest tariff for today
    const checkInDate = new Date(room.checkIn);
    const endDate = room.checkOut ? new Date(room.checkOut) : new Date();
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
    const numDays = Math.max(1, Math.ceil((endDate - checkInDate) / (1000 * 60 * 60 * 24)));
    // Use latest tariff for today
    let latestTariff = room.price;
    if (room.tariffHistory && room.tariffHistory.length > 0) {
      const sorted = [...room.tariffHistory].sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
      for (let i = 0; i < sorted.length; i++) {
        const entryDate = new Date(sorted[i].fromDate);
        if (entryDate <= startOfToday) {
          latestTariff = sorted[i].tariff;
        } else {
          break;
        }
      }
    }
    const currentTotal = room.totalAmountOverride !== null && room.totalAmountOverride !== undefined 
      ? room.totalAmountOverride 
      : (numDays * latestTariff);
    
    // Simulate upgrade to calculate new total
    const tempRoom = {...room};
   
    
    // Add simulated upgrade
  
    tempRoom.tariffHistory.sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
    tempRoom.price = newTariff;
    
    const newTotal = calculateTotalWithUpgrade(tempRoom);
    const difference = newTotal - currentTotal;

    document.getElementById('editModalTotalAmount').value = newTotal.toFixed(2);
    
    const previewContent = document.getElementById('upgradePreviewContent');
    previewContent.innerHTML = `
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
        <span>Current Total:</span><strong>₹${currentTotal.toLocaleString()}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
        <span>New Total:</span><strong style="color:#28a745;">₹${newTotal.toLocaleString()}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #dee2e6;">
        <span>Difference:</span><strong style="color:${difference >= 0 ? '#28a745' : '#dc3545'};">₹${Math.abs(difference).toLocaleString()} ${difference >= 0 ? 'increase' : 'decrease'}</strong>
      </div>
    `;
    
    document.getElementById('upgradePreview').style.display = 'block';
  };
  
  // Add event listeners for real-time preview
  document.getElementById('upgradeDate').addEventListener('change', updateUpgradePreview);
  document.getElementById('upgradeNewTariff').addEventListener('input', updateUpgradePreview);
  
  // Add event listener for category selection to prefill price
  document.getElementById('upgradeNewCategory').addEventListener('change', function() {
    const selectedCategory = this.value;
    const tariffInput = document.getElementById('upgradeNewTariff');
    
    if (selectedCategory && categoryPrices[selectedCategory]) {
      tariffInput.value = categoryPrices[selectedCategory];
      updateUpgradePreview(); // Update preview with new price
    }
  });
  
  document.getElementById('upgradeModal').style.display = 'block';
  
  // Initial preview calculation
  updateUpgradePreview();
}

function hideUpgradeModal() {
  document.getElementById('upgradeModal').style.display = 'none';
  currentRoomIndexForUpgrade = null;
}

function applyRoomUpgrade(upgradeDate, newTariff, newCategory) {
  const room = rooms[currentRoomIndexForUpgrade];
  if (!room) return;
  
  // Initialize tariffHistory if it doesn't exist
  if (!room.tariffHistory || room.tariffHistory.length === 0) {
    room.tariffHistory = [{
      fromDate: room.checkIn,
      tariff: room.price,
      category: room.category
    }];
  }
  
  // Add new tariff entry (convert datetime-local to ISO format)
  const upgradeDateISO = new Date(upgradeDate).toISOString();
  room.tariffHistory.push({
    fromDate: upgradeDateISO,
    tariff: newTariff,
    category: newCategory || room.category
  });
  
  // Update current price and category to new values
  room.price = newTariff;
  if (newCategory) {
    room.category = newCategory;
  }
  
  // Clear any total amount override to force recalculation with new tariff
  room.totalAmountOverride = null;
  
  // Sort tariff history by date
  room.tariffHistory.sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
  
  // Save to localStorage
  localStorage.setItem('hotelRooms', JSON.stringify(rooms));
  
  // Force complete table refresh to update tariff columns
  renderRoomTable();
  renderUpcomingCheckinsTable();
  updateTotalCollection();
  
  // Show success feedback on the upgrade button
  const upgradeBtn = document.querySelector(`[data-index="${currentRoomIndexForUpgrade}"] .edit-room-btn`);
  if (upgradeBtn) {
    const originalText = upgradeBtn.textContent;
    upgradeBtn.textContent = '✓ Upgraded';
    upgradeBtn.style.backgroundColor = '#28a745';
    setTimeout(() => {
      upgradeBtn.textContent = originalText;
      upgradeBtn.style.backgroundColor = '#007bff';
    }, 2000);
  }
  
  // Also update the table row immediately to show the new tariff
  // setTimeout(() => {
    renderRoomTable();
  // }, 100);
  
  hideUpgradeModal();
  
  // Also close the edit room modal
  const editModal = document.getElementById('editRoomModal');
  if (editModal) {
    editModal.style.display = 'none';
  }
}

function calculateTotalWithUpgrade(room) {
  if (!room.tariffHistory || room.tariffHistory.length <= 1) {
    // No upgrade history, use simple calculation
    const checkInDate = new Date(room.checkIn);
    let endDate = room.checkOut ? new Date(room.checkOut) : new Date();
    // If current time is after 10:00 am, count next day
    if (!room.checkOut) {
      if (endDate.getHours() > 10 || (endDate.getHours() === 10 && endDate.getMinutes() > 0)) {
        endDate.setDate(endDate.getDate() + 1);
        endDate.setHours(10, 0, 0, 0);
      } else {
        endDate.setHours(10, 0, 0, 0);
      }
    }
    const totalDays = Math.max(1, Math.ceil((endDate - checkInDate) / (1000 * 60 * 60 * 24)));
    return totalDays * room.price;
  }
  
 
  const checkInDate = new Date(room.checkIn);
  let endDate = room.checkOut ? new Date(room.checkOut) : new Date();
  // If current time is after 10:00 am, count next day
  if (!room.checkOut) {
    if (endDate.getHours() > 10 || (endDate.getHours() === 10 && endDate.getMinutes() > 0)) {
      endDate.setDate(endDate.getDate() + 1);
      endDate.setHours(10, 0, 0, 0);
    } else {
      endDate.setHours(10, 0, 0, 0);
    }
  }
  const totalDays = Math.max(1, Math.ceil((endDate - checkInDate) / (1000 * 60 * 60 * 24)));
  let total = 0;
  total = room.tariffHistory[room.tariffHistory.length-1].tariff + room.price * (totalDays-1);

  

  // for (let i = 0; i < room.tariffHistory.length; i++) {
  //   const currentPeriod = room.tariffHistory[i];
  //   const nextPeriod = room.tariffHistory[i + 1];
    
  //   const periodStartDate = new Date(Math.max(new Date(currentPeriod.fromDate), checkInDate));
  //   const periodEndDate = nextPeriod ? 
  //     new Date(Math.min(new Date(nextPeriod.fromDate), endDate)) : 
  //     endDate;
    
  //   // if (periodStartDate < endDate && periodEndDate > checkInDate) {
  //   //   const daysInPeriod = Math.max(0, Math.ceil((periodEndDate - periodStartDate) / (1000 * 60 * 60 * 24)));
  //   //   const periodAmount = daysInPeriod * currentPeriod.tariff;
  //   //   total += periodAmount;
  //   // }
  // }
  
  return Math.max(0, total);
}

// Add event listeners for upgrade modal
document.getElementById('upgradeCancel').addEventListener('click', hideUpgradeModal);
document.getElementById('upgradeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const upgradeDate = document.getElementById('upgradeDate').value;
  const newTariff = parseFloat(document.getElementById('upgradeNewTariff').value);
  const newCategory = document.getElementById('upgradeNewCategory').value;
  
  if (!upgradeDate || !newTariff || newTariff <= 0) {
    alert('Please fill in all required fields with valid values.');
    return;
  }
  
  const upgradeDateObj = new Date(upgradeDate);
  const now = new Date();
  
  if (upgradeDateObj < now) {
    alert('Upgrade date and time cannot be in the past.');
    return;
  }
  
  applyRoomUpgrade(upgradeDate, newTariff, newCategory);
});

function updateTotalCollection() {
  // Only count current bookings, not future check-ins
  const currentDate = new Date();
  const total = rooms
    .filter(room => {
      const checkInDate = new Date(room.checkIn);
      return checkInDate <= currentDate; // Only current bookings
    })
    .reduce((sum, room) => sum + room.price, 0);
//   totalCollection.textContent = `Total Collection for Day: ₹${total}`;
}

// Print GST Bill for individual room booking
function printGSTBill(room) {
  const gstRate = 0.12; // 12% GST
  // Use total amount from room bookings table as base amount
  const tableTotal = calculateTotalWithUpgrade(room);
  const finalTotal = room.totalAmountOverride !== null && room.totalAmountOverride !== undefined 
    ? room.totalAmountOverride 
    : tableTotal;
  const baseAmount = finalTotal;
  const gstAmount = baseAmount * gstRate;
  const totalAmount = baseAmount + gstAmount;
  
  let html = '<html><head><title>GST Bill - Room Booking</title>';
  html += '<style>';
  html += 'body { font-family: Arial, sans-serif; margin: 20px; }';
  html += '.bill-header { text-align: center; margin-bottom: 30px; }';
  html += '.bill-title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }';
  html += '.hotel-details { margin-bottom: 20px; }';
  html += '.customer-details { margin-bottom: 20px; }';
  html += 'table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }';
  html += 'th, td { border: 1px solid #333; padding: 8px; text-align: left; }';
  html += 'th { background-color: #f0f0f0; font-weight: bold; }';
  html += '.amount-column { text-align: right; }';
  html += '.total-row { font-weight: bold; background-color: #f0f0f0; }';
  html += '.gst-info { margin-top: 20px; font-size: 12px; }';
  html += '</style>';
  html += '</head><body>';
  
  html += '<div class="bill-header">';
  html += '<div class="bill-title">TAX INVOICE</div>';
  html += '<div>GST Bill</div>';
  html += '</div>';
  
  html += '<div class="hotel-details">';
  html += '<strong>Hotel Name:</strong> Your Hotel Name<br>';
  html += '<strong>Address:</strong> Hotel Address<br>';
  html += '<strong>GSTIN:</strong> 22AAAAA0000A1Z5<br>';
  html += '<strong>Bill No:</strong> GST-' + Date.now() + '<br>';
  html += '<strong>Date:</strong> ' + new Date().toLocaleDateString();
  html += '</div>';
  
  html += '<div class="customer-details">';
  html += '<strong>Guest Name:</strong> ' + room.name + '<br>';
  html += '<strong>Room Number:</strong> ' + room.number + '<br>';
  html += '<strong>Check-in:</strong> ' + formatDateTime(room.checkIn) + '<br>';
  html += '<strong>Check-out:</strong> ' + (room.checkOut ? formatDateTime(room.checkOut) : 'Ongoing') + '<br>';
  html += '<strong>No. of Persons:</strong> ' + (room.numPerson || 1) + '<br>';
  html += '<strong>Mobile Number:</strong> ' + (room.mobile || 'N/A');
  html += '</div>';
  
  html += '<table>';
  html += '<thead><tr><th>Description</th><th>Category</th><th class="amount-column">Base Amount</th><th class="amount-column">GST (12%)</th><th class="amount-column">Total Amount</th></tr></thead>';
  html += '<tbody>';
  html += '<tr>';
  html += '<td>Room Booking</td>';
  html += '<td>' + room.category + '</td>';
  html += '<td class="amount-column">₹' + baseAmount.toFixed(2) + '</td>';
  html += '<td class="amount-column">₹' + gstAmount.toFixed(2) + '</td>';
  html += '<td class="amount-column">₹' + totalAmount.toFixed(2) + '</td>';
  html += '</tr>';
  html += '<tr class="total-row">';
  html += '<td colspan="2"><strong>Total</strong></td>';
  html += '<td class="amount-column"><strong>₹' + baseAmount.toFixed(2) + '</strong></td>';
  html += '<td class="amount-column"><strong>₹' + gstAmount.toFixed(2) + '</strong></td>';
  html += '<td class="amount-column"><strong>₹' + totalAmount.toFixed(2) + '</strong></td>';
  html += '</tr>';
  html += '</tbody></table>';
  
  html += '<div class="gst-info">';
  html += '<strong>GST Breakup:</strong><br>';
  html += 'CGST (6%): ₹' + (gstAmount/2).toFixed(2) + '<br>';
  html += 'SGST (6%): ₹' + (gstAmount/2).toFixed(2) + '<br>';
  html += '<br><strong>Payment Mode:</strong> ' + room.paymentType;
  html += '<br><strong>Advance Paid:</strong> ₹' + (room.advancePaid || 0);
  html += '</div>';
  
  html += '</body></html>';
  
  const win = window.open('', '', 'width=800,height=900');
  win.document.write(html);
  win.document.close();
  win.print();
}

// Print Non-GST Bill for individual room booking
function printNonGSTBill(room) {
  // Use total amount from room bookings table
  const tableTotal = calculateTotalWithUpgrade(room);
  const totalAmount = room.totalAmountOverride !== null && room.totalAmountOverride !== undefined 
    ? room.totalAmountOverride 
    : tableTotal;
  let html = '<html><head><title>Bill - Room Booking</title>';
  html += '<style>';
  html += 'body { font-family: Arial, sans-serif; margin: 20px; }';
  html += '.bill-header { text-align: center; margin-bottom: 30px; }';
  html += '.bill-title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }';
  html += '.hotel-details { margin-bottom: 20px; }';
  html += '.customer-details { margin-bottom: 20px; }';
  html += 'table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }';
  html += 'th, td { border: 1px solid #333; padding: 8px; text-align: left; }';
  html += 'th { background-color: #f0f0f0; font-weight: bold; }';
  html += '.amount-column { text-align: right; }';
  html += '.total-row { font-weight: bold; background-color: #f0f0f0; }';
  html += '.bill-footer { margin-top: 20px; font-size: 12px; }';
  html += '</style>';
  html += '</head><body>';
  
  html += '<div class="bill-header">';
  html += '<div class="bill-title">BILL RECEIPT</div>';
  html += '<div>Room Booking Bill</div>';
  html += '</div>';
  
  html += '<div class="hotel-details">';
  html += '<strong>Hotel Name:</strong> Your Hotel Name<br>';
  html += '<strong>Address:</strong> Hotel Address<br>';
  html += '<strong>Contact:</strong> +91 XXXXXXXXXX<br>';
  html += '<strong>Bill No:</strong> BILL-' + Date.now() + '<br>';
  html += '<strong>Date:</strong> ' + new Date().toLocaleDateString();
  html += '</div>';
  
  html += '<div class="customer-details">';
  html += '<strong>Guest Name:</strong> ' + room.name + '<br>';
  html += '<strong>Room Number:</strong> ' + room.number + '<br>';
  html += '<strong>Check-in:</strong> ' + formatDateTime(room.checkIn) + '<br>';
  html += '<strong>Check-out:</strong> ' + (room.checkOut ? formatDateTime(room.checkOut) : 'Ongoing') + '<br>';
  html += '<strong>No. of Persons:</strong> ' + (room.numPerson || 1) + '<br>';
  html += '<strong>Mobile Number:</strong> ' + (room.mobile || 'N/A');
  html += '</div>';
  
  html += '<table>';
  html += '<thead><tr><th>Description</th><th>Category</th><th class="amount-column">Amount</th></tr></thead>';
  html += '<tbody>';
  html += '<tr>';
  html += '<td>Room Booking</td>';
  html += '<td>' + room.category + '</td>';
  html += '<td class="amount-column">₹' + totalAmount.toFixed(2) + '</td>';
  html += '</tr>';
  html += '<tr class="total-row">';
  html += '<td colspan="2"><strong>Total Amount</strong></td>';
  html += '<td class="amount-column"><strong>₹' + totalAmount.toFixed(2) + '</strong></td>';
  html += '</tr>';
  html += '</tbody></table>';
  
  html += '<div class="bill-footer">';
  html += '<strong>Payment Details:</strong><br>';
  html += 'Payment Mode: ' + room.paymentType + '<br>';
  html += 'Advance Paid: ₹' + (room.advancePaid || 0) + '<br>';
  html += 'Balance: ₹' + (totalAmount - (room.advancePaid || 0)) + '<br>';
  html += '<br><em>Thank you for choosing our hotel!</em>';
  html += '</div>';
  
  html += '</body></html>';
  
  const win = window.open('', '', 'width=800,height=900');
  win.document.write(html);
  win.document.close();
  win.print();
}

// Print GST Bill with custom edited data
function printGSTBillWithCustomData(room, customData) {
  const days = Math.max(1, Math.ceil((new Date(room.checkOut || new Date()) - new Date(room.checkIn)) / (1000 * 60 * 60 * 24)));
  
  let baseAmount, cgstAmount, sgstAmount, totalAmount;
  const cgstRate = customData.gstRate / 2; // Split GST into CGST and SGST
  const sgstRate = customData.gstRate / 2;
  
  if (customData.gstInclusive) {
    // Base amount includes GST - need to extract GST from it
    totalAmount = customData.baseAmount;
    const gstMultiplier = 1 + (customData.gstRate / 100);
    baseAmount = totalAmount / gstMultiplier;
    cgstAmount = (totalAmount - baseAmount) / 2;
    sgstAmount = (totalAmount - baseAmount) / 2;
  } else {
    // Base amount excludes GST - add GST to it
    baseAmount = customData.baseAmount;
    cgstAmount = (baseAmount * cgstRate) / 100;
    sgstAmount = (baseAmount * sgstRate) / 100;
    totalAmount = baseAmount + cgstAmount + sgstAmount;
  }
  const balance = totalAmount - customData.advancePaid;
  const invoiceNo = 'INV-' + Date.now().toString().slice(-6);
  
  // Format check-in and check-out times properly
  const checkinDate = new Date(room.checkIn);
  const checkinTime = checkinDate.toLocaleDateString('en-GB') + ' ' + checkinDate.toLocaleTimeString('en-GB', {hour12: false, hour: '2-digit', minute: '2-digit'});
  
  let checkoutTime;
  console.log('Debug GST - room.checkOut value:', room.checkOut, 'Type:', typeof room.checkOut, 'Length:', room.checkOut ? room.checkOut.length : 'N/A');
  if (room.checkOut && room.checkOut.trim() !== '') {
    const checkoutDate = new Date(room.checkOut);
    console.log('Debug GST - checkoutDate:', checkoutDate);
    if (!isNaN(checkoutDate.getTime())) {
      checkoutTime = checkoutDate.toLocaleDateString('en-GB') + ' ' + checkoutDate.toLocaleTimeString('en-GB', {hour12: false, hour: '2-digit', minute: '2-digit'});
      console.log('Debug GST - formatted checkoutTime:', checkoutTime);
    } else {
      console.log('Debug GST - Invalid date created from:', room.checkOut);
      // Use today's date and current time if invalid date
      const today = new Date();
      checkoutTime = today.toLocaleDateString('en-GB') + ' ' + today.toLocaleTimeString('en-GB', {hour12: false, hour: '2-digit', minute: '2-digit'});
    }
  } else {
    console.log('Debug GST - No valid checkout time, using today\'s date and current time');
    // Use today's date and current time if no checkout date provided
    const today = new Date();
    checkoutTime = today.toLocaleDateString('en-GB') + ' ' + today.toLocaleTimeString('en-GB', {hour12: false, hour: '2-digit', minute: '2-digit'});
  }
  
  let html = '<!DOCTYPE html><html><head>';
  html += '<title>Hotel Invoice</title>';
  html += '<style>';
  html += 'body { font-family: Arial, sans-serif; margin: 0; padding: 10px; }';
  html += '.invoice-box { max-width: 800px; margin: auto; padding: 0; line-height: 1.6; }';
  html += '.title { text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 10px; }';
  html += '.hotel-header { text-align: center; margin-bottom: 10px; }';
  html += '.table-section { padding: 0px; }';
  html += '.hotel-info, .guest-info { width: 100%; font-size: 14px; border: 1px solid #000; }';
  html += '.hotel-info td, .guest-info td { padding: 3px; vertical-align: top; word-wrap: break-word; max-width: 300px; }';
  html += 'table.invoice-details { width: 100%; border-collapse: collapse; }';
  html += 'table.invoice-details th, table.invoice-details td { border-left: 1px solid #000; border-right: 1px solid #000; padding: 5px; text-align: center; font-size: 14px; }';
  html += 'table.invoice-details th { font-weight: bold; border-bottom: 1px solid #000; }';
  html += '.totals { text-align: right; margin-top: 15px; font-size: 14px; font-weight: bold; }';
  html += '.footer { margin-top: 30px; font-size: 12px; display: flex; justify-content: space-between; }';
  html += 'hr { border: 1px solid #000; margin: 10px 0; }';
  html += '</style>';
  html += '</head><body>';
  
  html += '<div class="invoice-box">';
  html += '<div class="hotel-header">';
  html += '<div class="title">' + customData.hotelName.toUpperCase() + '</div>';
  html += '<div style="text-align:center; font-size: 10px;">';
  html += customData.hotelAddress.replace(/\n/g, '<br>') + '<br>';
  html += 'Mobile: ' + customData.hotelContact + ' | Email: ' + (customData.hotelEmail || 'hotelroyalsquare9094@gmail.com') + '<br>';
  html += 'GST No: ' + customData.hotelGSTIN;
  html += '</div>';
  html += '</div>';
  
  html += '<div style="text-align: center; font-size: 18px; font-weight: bold; margin: 0;">INVOICE</div>';
  
  html += '<div class="table-section">';
  html += '<table class="hotel-info">';
  html += '<tr>';
  html += '<td>';
  html += '<b>Bill No:</b> ' + (invoiceNo || '') + '<br>';
  html += '<b>No of Person:</b> ' + (customData.numPersons || '') + '<br>';
  html += '<b>Arrival Date:</b> ' + (checkinTime && checkinTime.split(' ')[0] || '') + '<br>';
  html += '<b>Arrival Time:</b> ' + (checkinTime && checkinTime.split(' ')[1] || '') + '<br>';
  html += '<b>Bill To:</b> ' + (customData.billToName ? customData.billToName.toUpperCase() : '') + '<br>';
  html += '<b style="vertical-align: top;">Address:</b> <span style="word-wrap: break-word; display: inline-block; max-width: 250px;">' + (customData.billToAddress || '') + '</span><br>';
  html += '<b>GSTIN:</b> ' + (customData.gstin || '') + '<br>';
  html += '<b>Guest Details:</b>' + formatGuestListTwoColumns(customData.guestNames || customData.guestName);
  html += '</td>';
  html += '<td>';
  html += '<b>Room No:</b> ' + (customData.roomNumber || '') + '<br>';
  html += '<b>No Of Days:</b> ' + (days || '') + '<br>';
  html += '<b>Room Plan:</b> ' + (customData.category ? customData.category.toUpperCase() : '') + '<br>';
  html += '<b>Departure Date:</b> ' + (checkoutTime && checkoutTime.split(' ')[0] || '') + '<br>';
  html += '<b>Departure Time:</b> ' + (checkoutTime && checkoutTime.split(' ')[1] || '') + '<br>';
  html += '<b>Mode of Payment:</b> ' + (customData.paymentType ? customData.paymentType.toUpperCase() : '') + '<br>';
  html += '<b>Mobile No:</b> ' + (customData.mobileNo || customData.customerNumber || '');
  html += '</td>';
  html += '</tr>';
  html += '</table>';
  
  html += '<table class="invoice-details">';
  html += '<tr>';
  html += '<th>Date</th>';
  html += '<th>Description</th>';
  html += '<th>Basic Amount</th>';
  html += '<th>Discount</th>';
  html += '<th>CGST %</th>';
  html += '<th>CGST Amount</th>';
  html += '<th>SGST %</th>';
  html += '<th>SGST Amount</th>';
  html += '<th>IGST %</th>';
  html += '<th>IGST Amount</th>';
  html += '<th>Amount</th>';
  html += '</tr>';
  html += '<tr>';
  html += '<td>' + new Date().toLocaleDateString('en-GB') + '</td>';
  html += '<td>Room Tariff</td>';
  html += '<td>' + baseAmount.toFixed(2) + '</td>';
  html += '<td>0.00</td>';
  html += '<td>' + cgstRate.toFixed(1) + '%</td>';
  html += '<td>' + cgstAmount.toFixed(2) + '</td>';
  html += '<td>' + sgstRate.toFixed(1) + '%</td>';
  html += '<td>' + sgstAmount.toFixed(2) + '</td>';
  html += '<td>-</td>';
  html += '<td>0.00</td>';
  html += '<td>' + totalAmount.toFixed(2) + '</td>';
  html += '</tr>';
  
  // Add empty rows to fill the page
  const maxRows = 15; // Adjust based on page size
  for (let i = 1; i < maxRows; i++) {
    html += '<tr>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '</tr>';
  }
  
  // Add total row
  html += '<tr style="font-weight: bold; border-top: 1px solid #000; border-bottom: 1px solid #000;">';
  html += '<td colspan="2" style="text-align: right; font-weight: bold;">TOTAL</td>';
  html += '<td style="font-weight: bold;">' + baseAmount.toFixed(2) + '</td>';
  html += '<td style="font-weight: bold;">0.00</td>';
  html += '<td>-</td>';
  html += '<td style="font-weight: bold;">' + cgstAmount.toFixed(2) + '</td>';
  html += '<td>-</td>';
  html += '<td style="font-weight: bold;">' + sgstAmount.toFixed(2) + '</td>';
  html += '<td>-</td>';
  html += '<td style="font-weight: bold;">0.00</td>';
  html += '<td style="font-weight: bold;">' + totalAmount.toFixed(2) + '</td>';
  html += '</tr>';
  html += '</table>';
  
  html += '<div class="footer">';
  html += '<div>[ Guest Signature ]</div>';
  html += '<div>[ ' + customData.hotelName.toUpperCase() + ' ]</div>';
  html += '</div>';
  
  html += '</div>'; // Close table-section
  html += '</div>';
  html += '</body></html>';
  
  const win = window.open('', '', 'width=800,height=900');
  win.document.write(html);
  win.document.close();
  win.print();
}

// Print Non-GST Bill with custom edited data
function printNonGSTBillWithCustomData(room, customData) {
  const days = Math.max(1, Math.ceil((new Date(room.checkOut || new Date()) - new Date(room.checkIn)) / (1000 * 60 * 60 * 24)));
  
  // For Non-GST bills, the base amount is always the total amount regardless of GST inclusion setting
  const totalAmount = customData.baseAmount;
  const balance = totalAmount - customData.advancePaid;
  const invoiceNo = 'INV-' + Date.now().toString().slice(-6);
  
  // Format check-in and check-out times properly
  const checkinDate = new Date(room.checkIn);
  const checkinTime = checkinDate.toLocaleDateString('en-GB') + ' ' + checkinDate.toLocaleTimeString('en-GB', {hour12: false, hour: '2-digit', minute: '2-digit'});
  
  let checkoutTime;
  console.log('Debug Non-GST - room.checkOut value:', room.checkOut, 'Type:', typeof room.checkOut, 'Length:', room.checkOut ? room.checkOut.length : 'N/A');
  if (room.checkOut && room.checkOut.trim() !== '') {
    const checkoutDate = new Date(room.checkOut);
    console.log('Debug Non-GST - checkoutDate:', checkoutDate);
    if (!isNaN(checkoutDate.getTime())) {
      checkoutTime = checkoutDate.toLocaleDateString('en-GB') + ' ' + checkoutDate.toLocaleTimeString('en-GB', {hour12: false, hour: '2-digit', minute: '2-digit'});
      console.log('Debug Non-GST - formatted checkoutTime:', checkoutTime);
    } else {
      console.log('Debug Non-GST - Invalid date created from:', room.checkOut);
      // Use today's date and current time if invalid date
      const today = new Date();
      checkoutTime = today.toLocaleDateString('en-GB') + ' ' + today.toLocaleTimeString('en-GB', {hour12: false, hour: '2-digit', minute: '2-digit'});
    }
  } else {
    console.log('Debug Non-GST - No valid checkout time, using today\'s date and current time');
    // Use today's date and current time if no checkout date provided
    const today = new Date();
    checkoutTime = today.toLocaleDateString('en-GB') + ' ' + today.toLocaleTimeString('en-GB', {hour12: false, hour: '2-digit', minute: '2-digit'});
  }
  
  let html = '<!DOCTYPE html><html><head>';
  html += '<title>Hotel Invoice</title>';
  html += '<style>';
  html += 'body { font-family: Arial, sans-serif; margin: 0; padding: 10px; }';
  html += '.invoice-box { max-width: 800px; margin: auto; padding: 0; line-height: 1.6; }';
  html += '.title { text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 10px; }';
  html += '.hotel-header { text-align: center; margin-bottom: 10px; }';
  html += '.table-section { padding: 0px;}';
  html += '.hotel-info, .guest-info { width: 100%; font-size: 14px; border: 1px solid #000 }';
  html += '.hotel-info td, .guest-info td { padding: 3px; vertical-align: top; word-wrap: break-word; max-width: 300px; }';
  html += 'table.invoice-details { width: 100%; border-collapse: collapse;}';
  html += 'table.invoice-details th, table.invoice-details td { border-left: 1px solid #000; border-right: 1px solid #000; padding: 5px; text-align: center; font-size: 14px; }';
  html += 'table.invoice-details th { font-weight: bold; border-bottom: 1px solid #000; }';
  html += '.totals { text-align: right; margin-top: 15px; font-size: 14px; font-weight: bold; }';
  html += '.footer { margin-top: 30px; font-size: 12px; display: flex; justify-content: space-between; }';
  html += 'hr { border: 1px solid #000; margin: 10px 0; }';
  html += '</style>';
  html += '</head><body>';
  
  html += '<div class="invoice-box">';
  html += '<div class="hotel-header">';
  html += '<div class="title">' + customData.hotelName.toUpperCase() + '</div>';
  html += '<div style="text-align:center; font-size: 12px;">';
  html += customData.hotelAddress.replace(/\n/g, '<br>') + '<br>';
  html += 'Mobile: ' + customData.hotelContact + ' | Email: ' + (customData.hotelEmail || 'hotelroyalsquare9094@gmail.com');
  html += '</div>';
  html += '</div>';
  
  html += '<div style="text-align: center; font-size: 24px; font-weight: bold; margin: 0;">INVOICE</div>';
  
  html += '<div class="table-section">';
  html += '<table class="hotel-info">';
  html += '<tr>';
  html += '<td>';
  html += '<b>Bill No:</b> ' + (invoiceNo || '') + '<br>';
  html += '<b>No of Person:</b> ' + (customData.numPersons || '') + '<br>';
  html += '<b>Arrival Date:</b> ' + (checkinTime && checkinTime.split(' ')[0] || '') + '<br>';
  html += '<b>Arrival Time:</b> ' + (checkinTime && checkinTime.split(' ')[1] || '') + '<br>';
  html += '<b>Bill To:</b> ' + (customData.billToName ? customData.billToName.toUpperCase() : '') + '<br>';
  html += '<b style="vertical-align: top;">Address:</b> <span style="word-wrap: break-word; display: inline-block; max-width: 250px;">' + (customData.billToAddress || '') + '</span><br>';
  html += '<b>GSTIN:</b> ' + (customData.gstin || '') + '<br>';
  html += '<b>Guest List:</b>' + formatGuestListTwoColumns(customData.guestNames || customData.guestName);
  html += '</td>';
  html += '<td>';
  html += '<b>Room No:</b> ' + (customData.roomNumber || '') + '<br>';
  html += '<b>No Of Days:</b> ' + (days || '') + '<br>';
  html += '<b>Room Plan:</b> ' + (customData.category ? customData.category.toUpperCase() : '') + '<br>';
  html += '<b>Departure Date:</b> ' + (checkoutTime && checkoutTime.split(' ')[0] || '') + '<br>';
  html += '<b>Departure Time:</b> ' + (checkoutTime && checkoutTime.split(' ')[1] || '') + '<br>';
  html += '<b>Mode of Payment:</b> ' + (customData.paymentType ? customData.paymentType.toUpperCase() : '') + '<br>';
  html += '<b>Mobile No:</b> ' + (customData.mobileNo || customData.customerNumber || '');
  html += '</td>';
  html += '</tr>';
  html += '</table>';
  
  html += '<table class="invoice-details">';
  html += '<tr>';
  html += '<th>Date</th>';
  html += '<th>Description</th>';
  html += '<th>Rate per Day</th>';
  html += '<th>Days</th>';
  html += '<th>Discount</th>';
  html += '<th>Total Amount</th>';
  html += '</tr>';
  html += '<tr>';
  html += '<td>' + new Date().toLocaleDateString('en-GB') + '</td>';
  html += '<td>Room Tariff</td>';
  html += '<td>' + (totalAmount/days).toFixed(2) + '</td>';
  html += '<td>' + days + '</td>';
  html += '<td>0.00</td>';
  html += '<td>' + totalAmount.toFixed(2) + '</td>';
  html += '</tr>';
  
  // Add empty rows to fill the page
  const maxRows = 15; // Adjust based on page size
  for (let i = 1; i < maxRows; i++) {
    html += '<tr>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '<td>&nbsp;</td>';
    html += '</tr>';
  }
  
  // Add total row
  html += '<tr style="font-weight: bold; border-top: 1px solid #000; border-bottom: 1px solid #000; ">';
  html += '<td colspan="2" style="text-align: right; font-weight: bold;">TOTAL</td>';
  html += '<td style="font-weight: bold;">' + (totalAmount/days).toFixed(2) + '</td>';
  html += '<td style="font-weight: bold;">' + days + '</td>';
  html += '<td style="font-weight: bold;">0.00</td>';
  html += '<td style="font-weight: bold; ">' + totalAmount.toFixed(2) + '</td>';
  html += '</tr>';
  html += '</table>';
  
  html += '<div class="footer">';
  html += '<div>[ Guest Signature ]</div>';
  html += '<div>[ ' + customData.hotelName.toUpperCase() + ' ]</div>';
  html += '</div>';
  html += '</div>'; // Close table-section div
  
  html += '</div>';
  html += '</body></html>';
  
  const win = window.open('', '', 'width=800,height=900');
  win.document.write(html);
  win.document.close();
  win.print();
}

// Category-wise Collection Table
function renderCategoryCollectionTable() {
  const categoryCollectionBody = document.getElementById('categoryCollectionBody');
  const categories = ['Delux', 'Super Delux', 'Suite', 'Family Room', 'Other'];
  categoryCollectionBody.innerHTML = '';
  let hasData = false;
  let totalCash = 0;
  let totalOnline = 0;
  let totalGrand = 0;
  categories.forEach(cat => {
    // Filter out future check-ins for summary table
    const currentDate = new Date();
    const filtered = rooms.filter(r => {
      const checkInDate = new Date(r.checkIn);
      return r.category === cat && checkInDate <= currentDate;
    });
    if (filtered.length > 0) {
      hasData = true;
      const cash = filtered.filter(r => r.paymentType === 'Cash').reduce((sum, r) => sum + r.price, 0);
      const online = filtered.filter(r => r.paymentType === 'Online').reduce((sum, r) => sum + r.price, 0);
      const grand = cash + online;
      totalCash += cash;
      totalOnline += online;
      totalGrand += grand;
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${cat}</td><td>${cash || 0}</td><td>${online || 0}</td><td>${grand}</td>`;
      categoryCollectionBody.appendChild(tr);
    }
  });
  if (!hasData) {
    categoryCollectionBody.innerHTML = '<tr class="empty-row"><td colspan="4">No room collection yet.</td></tr>';
  } else {
    // Add room totals first
    const totalExpense = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const totalCanteen = canteenBills.reduce((sum, bill) => sum + bill.amount, 0);
    
    // Room Total row (before deductions)
    const trRoomTotal = document.createElement('tr');
    trRoomTotal.style.fontWeight = 'bold';
    trRoomTotal.style.background = '#f0f8ff';
    trRoomTotal.innerHTML = `<td>Room Total</td><td>${totalCash}</td><td>${totalOnline}</td><td style='color:blue;'><b>${totalGrand}</b></td>`;
    categoryCollectionBody.appendChild(trRoomTotal);
    
    // Canteen Bill row (only if totalCanteen > 0) - addition
    if (totalCanteen > 0) {
      const trCanteen = document.createElement('tr');
      trCanteen.style.fontWeight = 'bold';
      trCanteen.style.background = '#e9f5e9';
      trCanteen.innerHTML = `<td><b>+ Canteen Bill</b></td><td>0</td><td>0</td><td style='color:green;'><b>+${totalCanteen}</b></td>`;
      categoryCollectionBody.appendChild(trCanteen);
    }
    
    // Total after canteen (if canteen exists)
    if (totalCanteen > 0) {
      const totalAfterCanteen = totalGrand + totalCanteen;
      const trTotalAfterCanteen = document.createElement('tr');
      trTotalAfterCanteen.style.fontWeight = 'bold';
      trTotalAfterCanteen.style.background = '#fff3cd';
      trTotalAfterCanteen.style.borderTop = '1px solid #ffc107';
      trTotalAfterCanteen.innerHTML = `<td><b>Total</b></td><td>${totalCash}</td><td>${totalOnline}</td><td style='color:orange;'><b>${totalAfterCanteen}</b></td>`;
      categoryCollectionBody.appendChild(trTotalAfterCanteen);
    }
    
    // Expense row (only if totalExpense > 0) - subtraction
    if (totalExpense > 0) {
      const trExpense = document.createElement('tr');
      trExpense.style.fontWeight = 'bold';
      trExpense.style.background = '#f5e9e9';
      trExpense.innerHTML = `<td><b>- Expenses</b></td><td>0</td><td>0</td><td style='color:red;'><b>-${totalExpense}</b></td>`;
      categoryCollectionBody.appendChild(trExpense);
    }
    
    // Final Net Amount row
    const netValue = totalGrand - totalExpense + totalCanteen;
    const trNetTotal = document.createElement('tr');
    trNetTotal.style.fontWeight = 'bold';
    trNetTotal.style.background = '#d4edda';
    trNetTotal.style.borderTop = '2px solid #28a745';
    trNetTotal.innerHTML = `<td><b>Net Amount</b></td><td>${totalCash}</td><td>${totalOnline}</td><td style='color:green;font-size:16px;'><b>${netValue}</b></td>`;
    categoryCollectionBody.appendChild(trNetTotal);
    // Save today's net value in localStorage
    localStorage.setItem('todaysNetValue', netValue);
    // Read outstanding balance from localStorage (use the same key as the set button)
    let outstandingBalance = Number(localStorage.getItem('outstandingBalance')) || 0;
    // Show OB row (outstanding balance)
    const trOB = document.createElement('tr');
    trOB.style.fontWeight = 'bold';
    trOB.style.background = '#e0e0e0';
    trOB.innerHTML = `<td>O.B</td><td colspan='3' style='color:blue;'><b>${outstandingBalance}</b></td>`;
    categoryCollectionBody.appendChild(trOB);
    // Show Total OB row (outstanding balance + today's net value)
    const trTotalOB = document.createElement('tr');
    trTotalOB.style.fontWeight = 'bold';
    trTotalOB.style.background = '#d0ffd0';
    trTotalOB.innerHTML = `<td>T.C.B</td><td colspan='3' style='color:green;'><b>${netValue + outstandingBalance}</b></td>`;
    categoryCollectionBody.appendChild(trTotalOB);
  }
}

// Expense Management
const expenseForm = document.getElementById('expenseForm');
const expenseDescInput = document.getElementById('expenseDesc');
const expenseAmountInput = document.getElementById('expenseAmount');
const expenseTableBody = document.getElementById('expenseTableBody');
const totalExpense = document.getElementById('totalExpense');
let expenses = [];

// Load expenses from localStorage on page load
window.addEventListener('DOMContentLoaded', function() {
  const storedExpenses = localStorage.getItem('hotelExpenses');
  if (storedExpenses) {
    expenses = JSON.parse(storedExpenses);
    renderExpenseTable();
    updateTotalExpense && updateTotalExpense();
    renderCategoryCollectionTable && renderCategoryCollectionTable();
  }
});

// Food Bill Management
const foodBillForm = document.getElementById('foodBillForm');
const foodBillDescInput = document.getElementById('foodBillDesc');
const foodBillAmountInput = document.getElementById('foodBillAmount');
const foodBillTableBody = document.getElementById('foodBillTableBody');
let renderFoodBillTable;

expenseForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const desc = expenseDescInput.value.trim();
  const amount = Number(expenseAmountInput.value);
  if (!desc || !amount || amount <= 0) {
    expenseDescInput.focus();
    return;
  }
  expenses.push({ desc, amount });
  localStorage.setItem('hotelExpenses', JSON.stringify(expenses));
  renderExpenseTable();
  updateTotalExpense();
  renderCategoryCollectionTable();
  expenseForm.reset();
});

function renderExpenseTable() {
  expenseTableBody.innerHTML = '';
  if (expenses.length === 0) {
    expenseTableBody.innerHTML = '<tr class="empty-row"><td colspan="2">No expenses added yet.</td></tr>';
    renderCategoryCollectionTable();
    return;
  }
  let total = 0;
  expenses.forEach((exp, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${exp.desc}</td><td>${exp.amount}</td><td><button class='delete-expense-btn' data-index='${idx}' style='background:#b30000;color:#fff;border:none;border-radius:4px;padding:4px 10px;cursor:pointer;'>Delete</button></td>`;
    expenseTableBody.appendChild(tr);
    total += exp.amount;
  });
  // Add event listeners for delete buttons
  const deleteBtns = expenseTableBody.querySelectorAll('.delete-expense-btn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const index = parseInt(btn.getAttribute('data-index'));
      expenses.splice(index, 1);
      localStorage.setItem('hotelExpenses', JSON.stringify(expenses));
      renderExpenseTable();
      updateTotalExpense();
      renderCategoryCollectionTable();
    });
  });
  const trTotal = document.createElement('tr');
  trTotal.style.fontWeight = 'bold';
  trTotal.innerHTML = `<td>Total</td><td>${total}</td>`;
  expenseTableBody.appendChild(trTotal);
  renderCategoryCollectionTable();
}

function updateTotalExpense() {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
//   totalExpense.textContent = `Total Expenses: ₹${total}`;/
}

// Food Bill Form Submission
if (foodBillForm) {
  foodBillForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const desc = foodBillDescInput.value.trim();
    const amount = Number(foodBillAmountInput.value);
    if (!desc || !amount || amount <= 0) {
      foodBillDescInput.focus();
      return;
    }
    foodBills.push({ desc, amount });
    localStorage.setItem('hotelFoodBills', JSON.stringify(foodBills));
    renderFoodBillTable();
    foodBillForm.reset();
  });
}

// Render Food Bill Table
renderFoodBillTable = function() {
  if (!foodBillTableBody) return;
  foodBillTableBody.innerHTML = '';
  if (foodBills.length === 0) {
    foodBillTableBody.innerHTML = '<tr class="empty-row"><td colspan="2">No food bills added yet.</td></tr>';
    return;
  }
  let total = 0;
  foodBills.forEach(bill => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${bill.desc}</td><td>${bill.amount}</td>`;
    foodBillTableBody.appendChild(tr);
    total += bill.amount;
  });
  // Add total row at the bottom
  const trTotal = document.createElement('tr');
  trTotal.style.fontWeight = 'bold';
  trTotal.innerHTML = `<td>Total</td><td>${total}</td>`;
  foodBillTableBody.appendChild(trTotal);
}

// Outstanding Balance logic
let outstandingBalance = 0;
if (localStorage.getItem('outstandingBalance')) {
  outstandingBalance = Number(localStorage.getItem('outstandingBalance')) || 0;
}
function promptOutstandingBalance() {
  const ob = prompt('Enter Outstanding Balance (Yesterday):', outstandingBalance);
  if (ob !== null && !isNaN(ob)) {
    outstandingBalance = Number(ob);
    localStorage.setItem('outstandingBalance', outstandingBalance);
    renderCategoryCollectionTable();
  }
}
// Add button to set OB
window.addEventListener('DOMContentLoaded', function() {
  const summarySection = document.querySelector('#summary-section');
  if (summarySection) {
    let obBtn = document.getElementById('setOBBtn');
    if (!obBtn) {
      obBtn = document.createElement('button');
      obBtn.id = 'setOBBtn';
      obBtn.textContent = 'Set Outstanding Balance';
      obBtn.style = 'margin: 8px 0; padding: 8px 18px; font-weight: bold; border-radius: 8px; background: #ff9800; color: #fff; border: none;';
      const summaryTable = summarySection.querySelector('table');
      summarySection.insertBefore(obBtn, summaryTable);
      obBtn.addEventListener('click', promptOutstandingBalance);
    }
  }
});

// At the end of the day, move today's net value to previousOB for tomorrow
function rolloverOBForTomorrow() {
  const todaysNetValue = Number(localStorage.getItem('todaysNetValue')) || 0;
  localStorage.setItem('previousOB', todaysNetValue);
}
// You can call rolloverOBForTomorrow() at the end of the day (e.g., via a button or automatically)

// Add input formatting for date/time fields - No longer needed with datetime-local inputs
function addDateTimeFormatting() {
  // datetime-local inputs handle formatting and validation automatically
  // This function is kept for backward compatibility but no longer needed
}

// Initialize date formatting when page loads
document.addEventListener('DOMContentLoaded', function() {
  addDateTimeFormatting();
});
